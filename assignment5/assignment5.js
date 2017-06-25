const fs = require('fs');

function fileRead(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8',(err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
      console.log("===========================");
    })
  });
}

fileRead("./f1")
 .then((result) => {
    console.log(result);
    return fileRead("./f2");
  })
 .then((result) => {
    console.log(result);
    return fileRead("./f3");
  })
 .then((result) => {
    console.log(result);
    console.log("===========================");
  })
 .catch((errorOnFileRead) => {
    console.log(errorOnFileRead);
  });
