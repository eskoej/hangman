let answerNode = document.querySelector(`#answer`);
let resultNode = document.querySelector(`#result`);
let hintNode = document.querySelector(`#hint`);

let container = document.querySelector(`.button-group`);


let words = [
    "СОБАКА",
    "ЛОШАДЬ",
    "СВИНЬЯ",
    "КРОЛИК",
    "АЛЛИГАТОР",
    "АЛЬПАКА",
    "АМФИБИЯ",
    "АНАКОНДА",
    "МУРАВЬЕД",
    "АНТИЛОПА",
    "ОБЕЗЬЯНА",
    "БАБУИН",
    "БАРСУК",
    "БАРРАКУДА",
    "ВАСИЛИСК",
    "БАБОЧКА",
    "ВЕРБЛЮД",
    "ХАМЕЛЕОН",
    "ГЕПАРД",
    "СИНИЦА",
    "КУРИЦА",
    "ШИМПАНЗЕ",
    "ШИНШИЛЛА",
    "БУРУНДУК",
    "КОБРА",
    "КОРОВА",
    "КОЙОТ",
    "КРОКОДИЛ",
    "ВОРОНА",
    "КУКУШКА",
    "ОЛЕНЬ",
    "ДИНОЗАВР",
    "ДЕЛЬФИН",
    "ГОЛУБЬ",
    "СТРЕКОЗА"
];

// Выбираем слово
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let ix = 0; ix < word.length; ix++) {
    answerArray[ix] = "_";
}
let remainingLetters = word.length;
let life = word.length;
hintNode.innerHTML = `Угадай животного, слово из ${remainingLetters} букв!`;
answerNode.innerHTML = `Осталось ${life} попыток!`;
resultNode.innerHTML = answerArray.join(" ");

container.addEventListener(`click`, function (evt) {

    let node = evt.target;
    let guess = node.innerHTML;
    if (node.disabled==false && life>0 && remainingLetters>0) {
        node.disabled = true;
        if (word.includes(guess) && life > 0 && remainingLetters > 0) {
            for (let jx = 0; jx < word.length; jx++) {
                if (word[jx] === guess) {
                    answerArray[jx] = guess;
                    remainingLetters--;
                }
            }
            resultNode.innerHTML = answerArray.join(" ");

            if (remainingLetters == 0) {
                resultNode.innerHTML = answerArray.join(" ");
                answerNode.innerHTML = "Отлично! Вы отгадали слово!";
            }
        } else if (life == 1) {
            life--;
            answerNode.innerHTML = 'GAME OVER!';
        } else {
            life--;
            answerNode.innerHTML = `Упс! Осталось ${life} попыток!`;
        }
    }

});




