'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getNum = function () {
    const randNum = Math.round(Math.random() * 100);
    let userNum = prompt('Угадай число от 0 до 100');

    const guessNum = function () {
        if (+userNum === randNum) {
            return alert('Поздравляю Вы угадали!');
        } else if (userNum === null) {
            return alert('Игра окончена');
        } else if (!isNumber(userNum)) {
            userNum = prompt('Ведите число!');
            return guessNum();
        } else if (randNum > userNum) {
            userNum = prompt('Загаданное число больше, введите новый вариант');
            return guessNum();
        } else if (randNum < userNum) {
            userNum = prompt('Загаданное число меньше, введите новый вариант');
            return guessNum();
        }

    };
    guessNum();
};
getNum();
