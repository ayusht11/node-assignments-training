const fs = require('fs');

function fileRead(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      }
      resolve(data);
      console.log("===========================");
    })
  });
}

fileRead("./f1")
 .then(function (result) {
    console.log(result);
    return fileRead("./f2");
  })
 .then(function (result) {
    console.log(result);
    return fileRead("./f3");
  })
 .then(function (result) {
    console.log(result);
    console.log("===========================");
  })
 .catch(function (e) {
    console.log(e);
  });
