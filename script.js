/* -------------------------------
Règles :
Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (SCORE).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.
-------------------------------*/

newGame()

//boutton 
document.getElementById("newGame").onclick= newGame;
document.getElementById("roll").onclick= rollDice;
document.getElementById("hold").onclick= hold;
document.querySelector('#btn-rules').addEventListener('click', function() {
  alert("RÈGLES DU JEU: \n- Le jeu à 2 joueurs, chaque joueur joue sont tour \n- A chaque tour, un joueur lance un dé autant de fois qu'il le souhaite. Chaque résultat est ajouté à son score du tour \n- Mais, si le joueur obtient un 1, tout son score du tour est perdu. Après cela, c'est au tour du joueur suivant\n- Le joueur peut choisir de « Valider », ce qui signifie que son score du tour est ajouté à son score. Après cela, c'est au tour du joueur suivant\n- Le premier joueur à atteindre 100 points sur le score  remporte la partie"); 
});


//Création de la fonction pour démarrer le jeu 
function newGame() { 
  
    scoreFirstPlayer = 0;
    roundFirstPlayer = 0;
    scoreSecondPlayer= 0;
    roundSecondPlayer= 0;
    score=0;
    activePlayer=1;
    player1.style.opacity = "1";
    player2.style.opacity = "0";
    FirstPlayerWin=0;
    SecondPlayerWin=0;
    
    
  
    document.querySelector('#scoreFirstPlayer').textContent= scoreFirstPlayer ;  
    document.querySelector('#scoreSecondPlayer').textContent= scoreSecondPlayer;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
    document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
   
  }


  //Donne le score du round et passe au joueur suivant si 1

let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');
    
function rollDice() {
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    dice.dataset.side = randomnumber;
    dice.classList.toggle("reRoll");
    
    console.log(randomnumber)
        
    outputDiv.classList.remove("reveal");
    outputDiv.classList.add("hide");
        outputDiv.innerHTML = "Vous avez fait " + randomnumber;
            setTimeout(function(){ outputDiv.classList.add("reveal"); }, 1500);
    
    
    if ((activePlayer==1)&&(randomnumber>1)) { 
        roundFirstPlayer=roundFirstPlayer + randomnumber;
        document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer; 
        player1.style.opacity = "1";
        player2.style.opacity = "0";
      
     }else if ((activePlayer==1)&&(randomnumber===1)){
        roundFirstPlayer=0; 
        activePlayer=activePlayer+1; 
        document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
        player1.style.opacity = "0";
        player2.style.opacity = "1";
          
      
    }else if ((activePlayer==2)&&(randomnumber>1)){
        roundSecondPlayer=roundSecondPlayer + randomnumber;
        document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
        player2.style.opacity = "1";
        player1.style.opacity = "0";
          
    }else { 
        roundSecondPlayer=0;
        activePlayer=activePlayer-1;
        document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
        player1.style.opacity = "1";
        player2.style.opacity = "0";
      
      }
    }

//Ajoute le score du round au score et passe au joueurs suivant
//Si score >= 100 alors victoire 
function hold(){
  
    if ((activePlayer==1)&&(scoreFirstPlayer+roundFirstPlayer<100)){ 
     scoreFirstPlayer=roundFirstPlayer + scoreFirstPlayer;
     roundFirstPlayer=0;
     document.querySelector('#scoreFirstPlayer').textContent= scoreFirstPlayer;
     document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
     activePlayer= 2
     player1.style.opacity = "1";
     player2.style.opacity = "0";
     
   } else if ((activePlayer==1)&&(scoreFirstPlayer+roundFirstPlayer>=100)){
     activePlayer=1
     alert('Le joueur 1 à gagné la partie !!');
     nextGame()
    
    } else if ((activePlayer==2)&&(scoreSecondPlayer+roundSecondPlayer < 100)){
     scoreSecondPlayer=roundSecondPlayer + scoreSecondPlayer;
     roundSecondPlayer=0;
     document.querySelector('#scoreSecondPlayer').textContent= scoreSecondPlayer;
     document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
     activePlayer=1
     player1.style.opacity = "0";
     player2.style.opacity = "1";
     
     
   } else if ((activePlayer==2)&&(scoreSecondPlayer+roundSecondPlayer>= 100)) {
     activePlayer=2
     alert('Le joueur 2 à gagné la partie !!');
     nextGame()
   }
   }


   function nextGame(){
    scoreFirstPlayer = 0;
    roundFirstPlayer = 0;
    scoreSecondPlayer= 0;
    roundSecondPlayer= 0;
    score=0;
    player1.style.opacity = "1";
    player2.style.opacity = "0";
    
    document.querySelector('#scoreFirstPlayer').textContent= scoreFirstPlayer ;  
    document.querySelector('#scoreSecondPlayer').textContent= scoreSecondPlayer;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
    document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
   
  }
   