var inputText = null;
var buttonConvert = null;
var resultNum = null;

window.onload = function(){
  run();
};

function run() {
    buttonConvert = document.querySelector('#buttonConvert');
    inputText = document.querySelector('#txt'); // Need to check if #
    resultNum = document.querySelector('#result');
    buttonConvert.addEventListener("click", convertToBinary);
}

var convertToBinary = function() {
    resultNum.value = (Number(inputText.value)).toString(2); // 2 is the radix / base
}