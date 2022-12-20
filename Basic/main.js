//test
//alert('hello');

//かなり簡易的にやり直す。知らないことを確認する程度

let count;
//undefined
//console.log(count);
count = 30;
//console.log(count);
let newCount = 0;

let additionResult = 2 + 5;
//console.log(additionResult);

let string = 'Hello'
//特殊文字を使う場合は\
const userName = `test\\`;
string += userName + '!';
//console.log(string);
//$`{}`で変数埋め込み
//console.log(`${string}`);

const userInput = '10.9';
let calcResult;

calcResult = Number(userInput) + 10;
//小数点以下なし
calcResult = parseInt(userInput) + 10;
//float 20.9
calcResult = parseFloat(userInput) + 10;
console.log(calcResult);

//配列
let array = ['apple', 'banana'];
array = [1,2,3];
array = ['apple', 'banana', 'grape'];
console.log( array[0]);
console.log( array);

//オブジェクト


