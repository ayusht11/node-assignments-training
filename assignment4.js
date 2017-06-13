let files = ["./f1","./f2","./f3", "./f4", "./f5"], i = 0;
fs = require('fs');
function fileReader(file){
  fs.readFile(fileList[i], 'utf8' , function (err,data) {
    if (err) {
    return console.log(err);
  }
  console.log(data);
  console.log('==================');
  i++;
  if(i < 5) {
    callBackExample(fileList);
  }
  });
}
fileReader(files);
