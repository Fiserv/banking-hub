const fs = require('fs');
const path = require('path');

const baseDir = './reference';
const changedFilePath = process.env.CHANGED_FILE;

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
const fileName = path.basename(changedFilePath);
const fileContent = fs.readFileSync(changedFilePath, 'utf8');

allFiles.forEach(targetPath => {
  if (path.basename(targetPath) === fileName && targetPath !== changedFilePath) {
    fs.writeFileSync(targetPath, fileContent, 'utf8');
    console.log(`Synced ${changedFilePath} to ${targetPath}`);
  }
});
