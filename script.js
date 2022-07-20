alert('Задание 1: Возведение в степень')

do {
   var num = +prompt('Введите число')
}while(num == 0 || isNaN(num)) {
    console.log(num);
}

   var deg = +prompt('Введите степень');
while (isNaN(deg) || deg === 0) {
    deg = 2;
    console.log(deg);
}
for(let i = 0; i < 1; i++) {
    console.log(alert('Число ' + num + ' в степени ' + deg + ' получается ' + (num ** deg)));
}

alert('Задание 2: Лестница')

do {
    var sum = +prompt('Введите переменное колличество')
}while (isNaN(sum) || sum == 0) 

do {
    var symbol = prompt('Введите символ отступов')
}while (symbol == '') 

do {
    var lastSym = prompt('Введите конечный символ')
}while (lastSym == '') 

for (let i = 0; i < 1; i++) {
    let push = '';
    console.log(lastSym);
    for (let i = 0; i < sum; i++) {
    console.log((push += symbol) + lastSym);
    }
}
