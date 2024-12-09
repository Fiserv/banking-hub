const fs = require('fs');
const path = require('path');

const baseDir = './reference';
const targetDirs = [
  '11.0.0/Accounts'
];

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

allFiles.forEach(filePath => {
  const fileName = path.basename(filePath);
  targetDirs.forEach(targetDir => {
    const targetPath = path.join(baseDir, targetDir, fileName);
    if (fs.existsSync(targetPath) && targetPath !== filePath) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      fs.writeFileSync(targetPath, fileContent, 'utf8');
      console.log(`Synced ${filePath} to ${targetPath}`);
    }
  });
});
