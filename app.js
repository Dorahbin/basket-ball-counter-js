'use strict';
let homeScore = document.querySelector('.home-score');
let awayScore = document.querySelector('.away-score');
let homeOne = document.querySelector('.home-plus-one');
let homeTwo = document.querySelector('.home-plus-two');
let homeThree = document.querySelector('.home-plus-three');
let awayOne = document.querySelector('.away-plus-one');
let awayTwo = document.querySelector('.away-plus-two');
let awayThree = document.querySelector('.away-plus-three');
let resetBtn = document.querySelector('.new-game-btn');

// Add home score function

function addScoreHome(score) {
  let currValue = parseInt(homeScore.textContent);
  homeScore.textContent = score + currValue;
  // console.log(homeScore.textContent);
}

//add 1
homeOne.addEventListener('click', function () {
  addScoreHome(1);
});

//add 2
homeTwo.addEventListener('click', function () {
  addScoreHome(2);
});

//add 3
homeThree.addEventListener('click', function () {
  addScoreHome(3);
});

// Add away score function

function addScoreAway(score) {
  let currValue = parseInt(awayScore.textContent);
  awayScore.textContent = score + currValue;
}
// away scores
//add 1
awayOne.addEventListener('click', function () {
  addScoreAway(1);
});

//add 2
awayTwo.addEventListener('click', function () {
  addScoreAway(2);
});

//add 3
awayThree.addEventListener('click', function () {
  addScoreAway(3);
});

// resetting the game
function reload() {
  window.location.reload();
}
resetBtn.addEventListener('click', reload);


