const fs = require('fs');
const path = require('path');

// Specify the folder containing the markdown files.
const folderPath = './docs/release-notes';

// Read all files in the folder.
fs.readdir(folderPath, (err, files) => {
	if (err) throw err;
	
	//Filter markdown files.
	const mdFiles = files.filter(file => path.extname(file) === '.md');
	
	if (mdFiles.length === 0) {
		console.log('No markdown files found.');
		return;
	}
	
	// Read the contents of the Source file.
	const sourceFilePath = './docs/release-notes/master.md';
	fs.readFile(sourceFilePath, 'utf8', (err, data) => {
		if (err) throw err;
		
		//Write the content of Source file to all other markdown files.
		mdFiles.forEach(file => {
			const filePath = path.join(folderPath, file);
			if (filePath !== sourceFilePath){
				fs.writeFile(filePath, data, 'utf8', err => {
					if (err) throw err;
					console.log(`${filePath} has been updated.`);
				});
			}
		});
	});
});
