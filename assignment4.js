const fs = require('fs');

const files = ["./f1","./f2","./f3", "./f4", "./f5"];
let fileNo = 0;

function fileReader(fileList) {
  fs.readFile(fileList[fileNo], 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    console.log('==================');
    fileNo++;
    if (fileNo < 5) {
      fileReader(fileList);
    }
  });
}

fileReader(files);
