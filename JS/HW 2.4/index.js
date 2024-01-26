// задание 1
for (let a = 0; a < 2; a++) {
  console.log("Привет");
}

// задание 2

for (let a = 1; a <= 5; a++) {
  console.log("a");
}

// задание 3

for (let a = 7; a <= 22; a++) {
  console.log("a");
}

// задание 4

let obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let key in obj) {
  console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

// задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}
console.log(n)
console.log(num)

// задание 6

let firstFriday = 2;
for (let a = firstFriday; a <= 31; a += 7) {
  console.log(`Сегодня пятница, ${a}-е число. Необходимо подготовить отчет.`);
}