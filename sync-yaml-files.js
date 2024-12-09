const fs = require('fs');
const path = require('path');

const baseDir = './reference';
const folderNames = ['Premier', 'Precision', 'Signature', 'Cleartouch'];

function findYamlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findYamlFiles(filePath, fileList);
    } else if (file.endsWith('.yaml')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function syncFiles(fileList) {
  fileList.forEach(file => {
    const relativePath = path.relative(baseDir, file);
    let targetDir;

    folderNames.forEach(folder => {
      if (relativePath.includes(folder)) {
        targetDir = relativePath.replace(folder, '11.0.0');
      } else if (relativePath.includes('11.0.0')) {
        targetDir = relativePath.replace('11.0.0', folder);
      }
    });

    if (targetDir) {
      const targetFile = path.join(baseDir, targetDir);

      fs.mkdirSync(path.dirname(targetFile), { recursive: true });
      fs.copyFileSync(file, targetFile);
      console.log(`${file} was copied to ${targetFile}`);
    }
  });
}

const yamlFiles = findYamlFiles(baseDir);
syncFiles(yamlFiles);
