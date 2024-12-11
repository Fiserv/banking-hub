const fs = require('fs');
const path = require('path');

// Define the lines to find and replace
const linesToFind = [
  'OvrdExceptionData:',
  "          $ref: '#/components/schemas/OvrdExceptionDataType'"
];

const linesToReplace = [
  '        OvrdAutoAckInd:',
  '          type: boolean',
  '          description: |-',
  '            Value to indicate that the system should auto-acknowledge the exceptions. If this value is set to "true", then the exceptions that cannot be overridden are returned in the Status aggregate of the response message.'
];

// Function to replace lines in a file
function replaceLinesInFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const fileLines = fileContent.split('\n');

  for (let i = 0; i < fileLines.length - 1; i++) {
    if (fileLines[i].trim() === linesToFind[0].trim() && fileLines[i + 1].trim() === linesToFind[1].trim()) {
      // Replace the lines
      fileLines.splice(i, 2, ...linesToReplace);
      break;
    }
  }

  // Write the modified content back to the file
  fs.writeFileSync(filePath, fileLines.join('\n'), 'utf8');
}

// Function to process all .yaml files in a directory
function processYamlFiles(directoryPath) {
  fs.readdirSync(directoryPath).forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (path.extname(file) === '.yaml') {
      replaceLinesInFile(filePath);
    }
  });
}

// Replace 'your-directory-path' with the path to your directory containing .yaml files
const directoryPath = './reference/11.0.0/Accounts';
processYamlFiles(directoryPath);
