const fs = require('fs');
function reader(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8' , function (err,data) {
      if (err) {
      reject(err);
    }
    resolve(data);
    })
  });
}

reader("./f1").then(function(result) {
  console.log(result);
  console.log("===========================");
  return reader("./f2");
}).then(function(result) {
  console.log(result);
  console.log("===========================")
  return reader("./f3");
}).then(function(result) {
  console.log(result);
  console.log("===========================");
});
