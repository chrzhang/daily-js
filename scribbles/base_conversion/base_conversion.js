var resultDec = null;
var resultBin = null;
var resultOct = null;
var resultHex = null;

window.onload = function() {
    resultDec = document.querySelector('#txt'); // Need to check if #
    resultBin = document.querySelector('#binaryResult');
    resultOct = document.querySelector('#octalResult');
    resultHex = document.querySelector('#hexadecimalResult');
};

var convertAll = function() {
  convertToBin();
  convertToOct();
  convertToHex();
};

var convertToBin = function() {
    if (!resultDec.value) {
        resultBin.value = '';
        return;
    }
    resultBin.value = (Number(resultDec.value)).toString(2); // 2 is the radix / base
};

var convertToOct = function() {
    if (!resultDec.value) {
        resultOct.value = '';
        return;
    }
    resultOct.value = (Number(resultDec.value)).toString(8);
};

var convertToHex = function() {
    if (!resultDec.value) {
        resultHex.value = '';
        return;
    }
    resultHex.value = (Number(resultDec.value)).toString(16);
};

var convertNonBin = function() {
    resultDec.value = parseInt(resultBin.value, 2);
    if (isNaN(resultDec.value))
        resultDec.value = '';
    convertToOct();
    convertToHex();
};

var convertNonOct = function() {
    resultDec.value = parseInt(resultOct.value, 8);
    if (isNaN(resultDec.value))
        resultDec.value = '';
    convertToBin();
    convertToHex();
    
};

var convertNonHex = function() {
    resultDec.value = parseInt(resultHex.value, 16);
    if (isNaN(resultDec.value))
        resultDec.value = '';
    convertToBin();
    convertToOct();
}