// задание 1

let password = "Котя";
let userInput = prompt("введите пароль");

if (userInput === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

// задание 2

let c = 2;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("не верно");
}

// задание 3

let d = -102;
let e = 2;
if (d > 100 || e > 100) {
  console.log("верно");
} else {
  console.log("не верно");
}

// задание 4

let a = "2";
let b = "3";
alert(a + b);
alert(Number(a) + Number(b));

// задание 5

let monthNumber = 12;
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;
    default:
        alert("Неизвестный месяц")
}
