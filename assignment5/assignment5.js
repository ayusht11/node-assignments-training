const fs = require('fs');

function readingFile(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf8' , function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
      console.log("===========================");
    })
  });
}

readingFile("./f1")
 .then(function (result) {
    console.log(result);
    return readingFile("./f2");
})
 .then(function(result) {
    console.log(result);
    return readingFile("./f3");
})
 .then(function(result) {
    console.log(result);
    console.log("===========================");
});
