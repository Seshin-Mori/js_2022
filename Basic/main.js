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

let string = "Hello";
//特殊文字を使う場合は\
const userName = `test\\`;
string += userName + "!";
//console.log(string);
//$`{}`で変数埋め込み
//console.log(`${string}`);

const userInput = "10.9";
let calcResult;

calcResult = Number(userInput) + 10;
//小数点以下なし
calcResult = parseInt(userInput) + 10;
//float 20.9
calcResult = parseFloat(userInput) + 10;
console.log(calcResult);

//配列
let array = ["apple", "banana"];
array = [1, 2, 3];
array = ["apple", "banana", "grape"];
console.log(array[0]);
console.log(array);

//オブジェクト
const coffee = {
  //key:value
  //プロパティ名:値
  name: "Chocolate",
  size: 350,
  isHot: true,
  toppings: ["Cinnamon", "Caramel"],
  nutrition: {
    calories: 430,
    sugars: 53,
  },
};
coffee.isHot = false;
console.log(coffee.size);

//nullとundefined
//nullは基本的に明示的に書くが、undefinedは暗黙的に様々な場面で登場する。
let userInfo = null;
//undefinedはundefined型
//nullはオブジェクトである

//パラメータ、仮引数
function add(num1, num2) {
  //console.log(1 + 1);
  const value = num1 + num2;
  console.log(value);
  return value;
  //return以下の処理は実行されない
  //console.log(num1 + num2);
}

//add(4, 6);

//関数を宣言をする前に呼び出すことは可能
//関数宣言文はすべて内部的に巻き上げられる（内部的にファイルの一番上になる）。
const returnedValue = add(2, 3);
console.log(returnedValue);

//これはできない。関数内の変数はスコープの外だから。
//ブロックスコープ
//console.log(value);
