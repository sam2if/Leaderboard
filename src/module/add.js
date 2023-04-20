const scoreList = document.querySelector('.score-list');
const names = document.querySelector('.name');
const scores = document.querySelector('.score');

const players = [];

class Scores {
  constructor(name, score) {
    this.name = name.value;
    this.score = score.value;
  }
}

const order = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json.title));
};

const display = (player) => {
  const lists = document.createElement('div');
  lists.innerHTML = `<li class="disboards">${player}:</li>`;
  scoreList.appendChild(lists);
};

const added = () => {
  const player = new Scores(names, scores);
  if (names.value === '' || scores.value === '') {
    alert('input name and scores');
  } else {
    players.push(player);
    display(order);
    names.value = '';
    scores.value = '';
  }
};

export { added, players };