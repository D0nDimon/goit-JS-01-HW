let total = 0;
let numb = +prompt('Введите число');
while (numb) {
    total += numb;
    numb = +prompt('Введите число');
}
alert(`Общая сумма равна ${total}`);
