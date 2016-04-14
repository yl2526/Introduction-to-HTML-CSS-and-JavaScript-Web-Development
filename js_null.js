//var testVariable; //undefined
var testVariable = null; //null
//var testVariable = ''; //empty
//var testVariable = 'ABC'; //normal

var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;