'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getNum = function () {
    const randNum = Math.round(Math.random() * 100);
    let userNum = prompt('Угадай число от 0 до 100');
    let attemptNum = 9
        ;

    const guessNum = function () {
        if (+userNum === randNum) {
            let answerWin = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (answerWin) {
                return getNum();
            } else {
                return alert('Игра окончена');
            }
        } else if (userNum === null) {
            return alert('Игра окончена');
        } else if (!isNumber(userNum)) {
            userNum = prompt('Ведите число!');
            return guessNum();
        } else if (randNum > userNum) {
            userNum = prompt(`Загаданное число больше, осталось ${attemptNum--} попыток.`);
            if (attemptNum > 0) {
                return guessNum();
            } else {
                let answerLoose = confirm('Попытки закончились, хотите сыграть еще?');
                if (answerLoose) {
                    return getNum();
                } else {
                    return alert('Игра окончена');
                }
            }
        } else if (randNum < userNum) {
            userNum = prompt(`Загаданное число меньше, осталось ${attemptNum--} попыток.`);
            if (attemptNum > 0) {
                return guessNum();
            } else {
                let answerLoose = confirm('Попытки закончились, хотите сыграть еще?');
                if (answerLoose) {
                    return getNum();
                } else {
                    return alert('Игра окончена');
                }
            }
            return guessNum();
        }

    };
    guessNum();
};
getNum();