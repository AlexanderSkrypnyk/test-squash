var arr = [];

var n = 10000000;

for (var i = 0; i < n; i++) {

  var randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var choosenNum = randomNum(-1, 1);
  arr.push(choosenNum);
}

var file = '/home/alex/FBtest/LearnJS/data.json';
var obj = {name: 'JP'};
var fs = require('fs');
fs.writeFile(file, JSON.stringify(arr), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + file);
  }
  //записали сгенерированный масив в файл
});