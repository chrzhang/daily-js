var inputText = null;
var resultBin = null;
var resultOct = null;
var resultHex = null;


window.onload = function() {
    inputText = document.querySelector('#txt'); // Need to check if #
    resultBin = document.querySelector('#binaryResult');
    resultOct = document.querySelector('#octalResult');
    resultHex = document.querySelector('#hexadecimalResult');
};

var convertAll = function() {
  convertToBinary();
  convertToOct();
  convertToHex();
};

var convertToBinary = function() {
    resultBin.value = (Number(inputText.value)).toString(2); // 2 is the radix / base
};


var convertToOct = function() {
    resultOct.value = (Number(inputText.value)).toString(8);
};

var convertToHex = function() {
    resultHex.value = (Number(inputText.value)).toString(16);
};
