const fs = require('fs');
const path = require('path');

const baseDir = './reference';
const changedFiles = fs.readFileSync('changed_files.txt', 'utf8').split('\n').filter(Boolean);

if (changedFiles.length === 0) {
  console.error('No changed files detected.');
  process.exit(1);
}

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.yaml')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = findFiles(baseDir);

changedFiles.forEach(changedFilePath => {
  const fileName = path.basename(changedFilePath);
  const fileContent = fs.readFileSync(changedFilePath, 'utf8');

  allFiles.forEach(targetPath => {
    if (path.basename(targetPath) === fileName && targetPath !== changedFilePath) {
      fs.writeFileSync(targetPath, fileContent, 'utf8');
      console.log(`Synced ${changedFilePath} to ${targetPath}`);
    }
  });
});
