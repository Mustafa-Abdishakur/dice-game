let roundScore, activePlayer,score,gameRunning;
gameStart();


document.querySelector('.roll-btn').addEventListener('click', () => {
    if (gameRunning){
    //roll the dice
  const dice =Math.floor(Math.random() *6) + 1;
 //diplay dice roll (change img)
   document.querySelector('.dice').src= `dice-${dice}.png`;
    document.querySelector('.dice').style.display='block';

//display on the round score if value is not 1
    if (dice!==1){
        roundScore+=dice;
        document.querySelector('.round-score-' + activePlayer).textContent = roundScore;
    }
    
    else{
        nextPlayer();
    }
    
    }
});

document.querySelector('.hold-btn').addEventListener('click', () =>{
    if(gameRunning){
   //tranasfer round score to the player score
    score[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).innerHTML = score[activePlayer];
    //check if the player won
     if(score[activePlayer]>=document.querySelector('.scoreLimit').value){
        document.querySelector('#player-' + activePlayer).textContent = 'WINNER!';
         document.querySelector('#player-' + activePlayer).style.color = 'red';
 

        gameRunning=false;
         return gameRunning;
    }
    //next player
    nextPlayer();
    }
    
});

document.querySelector('.newGame-btn').addEventListener('click', () => {
   //score and round scores are zero
    
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('.round-score-0').textContent='0';     
    document.querySelector('.round-score-1').textContent='0';

  //winner text removed
    document.querySelector('#player-0').textContent = 'PLAYER 1';
    document.querySelector('#player-1').textContent = 'PLAYER 2';
    document.querySelector('#player-' + activePlayer).style.color = 'black';

    
    gameStart();

   
    
    
});



function nextPlayer() {
    roundScore=0;
    document.querySelector('.round-score-' + activePlayer).textContent = roundScore;

    document.querySelector('#panel-' + activePlayer).classList.remove('active');

     activePlayer==0 ? activePlayer=1 : activePlayer=0;

    document.querySelector('#panel-' + activePlayer).classList.add('active');


 
    

};



function gameStart() {
    roundScore = 0;
    activePlayer = 0;
    score=[0,0];
    gameRunning=true;
    document.querySelector('.dice').style.display='none';
    


    document.querySelector('#panel-0').classList.add('active');
    document.querySelector('#panel-1').classList.remove('active');

    document.querySelector('#panel-1').classList.add('player-panel');
    
    


};






