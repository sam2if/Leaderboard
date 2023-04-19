
const scoreList = document.querySelector('.score-list');
const names = document.querySelector('.name');
const scores = document.querySelector('.score');

let players = [];

class Scores {
    constructor(name, score) {
        this.name = name.value;
        this.score = score.value;
    }
}

function added() {
    let player = new Scores(names, scores);
    if (names.value === '' || scores.value === '') {
        alert("input name and scores");
    }
    else {
        players.push(player);
        display(player);
        names.value = '';
        scores.value = '';
    }
    
}

function display(player) {
    const lists = document.createElement('div');
    lists.innerHTML = `<li class="disboards">${player.name}: ${player.score}</li>`
    scoreList.appendChild(lists);
}

export { added };