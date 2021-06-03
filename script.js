'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getNum = function () {
    const randNum = 10; /* Math.round(Math.random() * 100);*/
    let userNum = prompt('Угадай число от 0 до 100');
    let attemptNum = 10;
     
  
        if (attemptNum > 0) {
                    
        if (userNum === null) {
            return alert('Игра окончена');
        } else if (+userNum === randNum) {
            confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (true) {
                return getNum();
            } else {
                return alert('Игра окончена');
            }
        } else {
            const guessNum = function () {
                if (!isNumber(userNum)) {
                    userNum = prompt('Ведите число!');
                    return guessNum();
                } else if (randNum > userNum) {
                    userNum = prompt(`Загаданное число больше, осталось ${attemptNum--} попыток `);
                    return guessNum();
                } else if (randNum < userNum) {
                    userNum = prompt(`Загаданное число меньше, осталось ${attemptNum--} попыток `);
                    return guessNum();
                } 
            };
            guessNum();
        }

        } else {
            confirm ('Попытки закончились, хотите сыграть еще?');
            if (true) {
                return getNum();
            } else {
                alert ('Игра окончена');
            }
        }
  
};
getNum();
