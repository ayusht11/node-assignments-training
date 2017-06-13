let files = ["./f1","./f2","./f3", "./f4", "./f5"], i = 0;
fs = require('fs');
function callBackExample(file){
  fs.readFile(file[i], 'utf8' , function (err,data) {
    if (err) {
	  return console.log(err);
	}
	console.log(data);
	console.log('==================');
	i++;
	if(i<5) {
	  callBackExample(file);
	}
  });

}
callBackExample(files);