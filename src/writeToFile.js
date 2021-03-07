const fs = require('fs');

//write HTML file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/pageTemplate.html', fileContent, err => {
            // check for error
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeToFile;
