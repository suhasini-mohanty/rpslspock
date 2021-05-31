'use strict';

const results=document.getElementById('result');
let [compScore,userScore,drawScore] = [0,0,0];

//when user clicks
//generate a random choice of the computer languages
//display choices
//it should compare the computer choice with the user choice
//it should show a messege about
//it should update the score


let gameRules = {
  Rock: {
    Rock : 'Draw',
    Paper : 'Lose',
    Scissors : 'Win',
    Lizard : 'Win',
    Spock : 'Lose',
  },
  Paper: {
    Rock : 'Win',
    Paper : 'Draw',
    Scissors : 'Lose',
    Lizard : 'Lose',
    Spock : 'Win',
  },
  Scissors: {
    Rock : 'Lose',
    Paper : 'Win',
    Scissors : 'Draw',
    Lizard : 'Win',
    Spock : 'Lose',
  },
  Lizard: {
    Rock : 'Lose',
    Paper : 'Win',
    Scissors : 'Lose',
    Lizard : 'Draw',
    Spock : 'Win',
  },
  Spock: {
    Rock : 'Win',
    Paper : 'Lose',
    Scissors : 'Win',
    Lizard : 'Lose',
    Spock : 'Draw',
  },
};

function clicked(input){
  // console.log(`i am ${input}`);
  let chioces=['Rock','Paper','Scissors','Lizard','Spock'];
  let randomNumber=Math.trunc(Math.random()*5);
  let compChoice=chioces[randomNumber];
  // console.log(input === chioces[randomNumber]);
  document.getElementById('comp-choice').innerHTML = `Computer choose <span>${compChoice.toUpperCase()}</span>`;
  document.getElementById('u-choice').innerHTML = `You choose <span>${input.toUpperCase()}</span>`;

switch(gameRules[input][compChoice]){
  case 'Win':
    results.innerHTML = 'You win';
    userScore++;
    break;
  case 'Lose':
    results.innerHTML = 'You lose';
    compScore++;
    break;
  // case 'Winn' : 
  //   results.innerHTML = 'You Win';
  //   userScore++;
  //   break;
  // // case 'losee' :
  //   results.innerHTML = 'You lose';
  //   compScore++;
  //   break;
  case 'Draw':
    results.innerHTML = 'You draw';
    drawScore++;
    break;
}
document.getElementById('comp-score').innerHTML = compScore;
document.getElementById('user-score').innerHTML = userScore;
document.getElementById('draw-score').innerHTML= drawScore;
}
function myFunction(){
  let s = document.getElementById('sss');
  if(s.style.display === 'block'){
    s.style.display = 'none';
  } else{
    s.style.display = 'block';
  }
}