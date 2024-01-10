alert('20');

let iphone = 2007;
alert(iphone);

const javascript = 'BrendanEich';
alert(javascript);

let first = 10;
let second = 2;
alert(first+second);
alert(first-second);
alert(first*second);
alert(first/second);
let result = (second**5);
alert(result);

let a = 9;
let b = 2;
alert(a/b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num +=1;
num -= 1;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
	name: 'Шурик',
	age: 18,
	isAdmin:true,
    ['city of residence']: 'Москва',   
};

user.age = 20;

delete user["city of residence"]

console.log(user)

let info = prompt("Какую информацию хотите узнать о пользователе?")

alert(user[info])

let name = prompt("Как вас зовут?")

alert(`Привет, ${name}!`)