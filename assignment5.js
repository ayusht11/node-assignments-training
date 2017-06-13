let files = ["./f1","./f2","./f3"], i = 0;
fs = require('fs');
function reader(files) {
  return new Promise(function(resolve, reject) {
    fs.readFile(files[i], 'utf8' , function (err,data) {
      if (err) {
      reject(err);
    }
    resolve(data);
    })
  });
}

reader(files).then(function(fromResolve) {
  console.log(fromResolve);
  console.log("===========================");
  i++;
  return reader(files);
}).then(function(fromResolve) {
  console.log(fromResolve);
  console.log("===========================")
  i++;
  return reader(files);
}).then(function(fromResolve) {
  console.log(fromResolve);
  console.log("===========================");
});
