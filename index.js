// Дан массив [2, 4, 17, 'Hello', 90, false, 'js']. Скопируйте данные из этого массива в другой.

/*
let arr = [2, 4, 17, 'Hello', 90, false, 'js'];
let arrCopy = arr.map(item => item);
*/

// Дан массив [0, 1, 5, 16, 22, 17, 8, 100, 1700]. Выведите только те значение, которые больше 20-ти

/*
let arr = [0, 1, 5, 16, 22, 17, 8, 100, 1700];
let newArr = arr.filter(item => item > 20);
*/

// Дан массив [0, 'hi', '17', true, 16, 'false', 0, 'четыре', 4]. Выведите в консоль только числа

/*
let arr = [0, 'hi', '17', true, 16, 'false', 0, 'четыре', 4];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    console.log(arr[i])
  }
}
*/

// Создайте массив из 15 рандомно сгеннерированных чисел в диапазоне от 5 до 20. Сперва выведите массив а потом сумму всех чисел в массиве

/*
let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
}

console.log(arr)
console.log(arr.reduce((acc, item) => acc + item))
*/

// Создайте массив, содержащие числа от 0 до 30, используя цикл и выведите в консоль только чётные числа

/*
let arr = [];
for (let i = 0; i <= 30; i++) {
  arr.push(i)
  if (i % 2 === 0 && i != 0) {
    console.log(i)
  }
}
*/

// Создайте 2 массива, содержащие по 5 чисел, которые вводит пользователь и сравните значения из массивов, находящиеся под одним индексом

/*
let arr = [];
let anotherArr = [];

for (let i = 0; i < 5; i++) {
  let firstPrompt = +prompt("Write any number");
  arr.push(firstPrompt); 
} 

for (let i = 0; i < 5; i++) {
  let secondPrompt = +prompt("Write any number");
  anotherArr.push(secondPrompt)
}

console.log(arr)
console.log(anotherArr)

for (let i = 0; i < 5; i++) {
  if (arr[i] > anotherArr[i]) {
    console.log(`${arr[i]} is greater than ${anotherArr[i]}`)
  } else if (arr[i] < anotherArr[i]) {
    console.log(`${arr[i]} is less than ${anotherArr[i]}`)
  } else {
    console.log(`${arr[i]} is equal to ${anotherArr[i]}`)
  }
}
*/

