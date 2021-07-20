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

//Variable
document.getElementById("newGame").onclick= newGame;
document.getElementById("roll").onclick= roll;
document.getElementById("hold").onclick= hold;

//Création de la fonction pour démarrer le jeu 
function newGame() { 
  
    scoreFirstPlayer = 0;
    roundFirstPlayer = 0;
    scoreSecondPlayer= 0;
    roundSecondPlayer= 0;
    score=0;
    activePlayer=1;
    FirstPlayerWin=0;
    SecondPlayerWin=0;
    
  
    document.querySelector('#scoreFirstPlayer').textContent= scoreFirstPlayer ;  
    document.querySelector('#scoreSecondPlayer').textContent= scoreSecondPlayer;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
    document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
   
  }


  //Donne le score du round et passe au joueur suivant si 1

  function roll() {
      let randomnumber = Math.floor (Math.random()*(6 - 1 + 1)) + 1;

      console.log(randomnumber)

      if ((activePlayer==1)&&(randomnumber>1)) { 
        roundFirstPlayer=roundFirstPlayer + randomnumber;
        document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer; 
        
    
       }else if ((activePlayer==1)&&(randomnumber===1)){
        
        roundFirstPlayer=0; 
        activePlayer=activePlayer+1; 
        document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
        
    
       }else if ((activePlayer==2)&&(randomnumber>1)){
        roundSecondPlayer=roundSecondPlayer + randomnumber;
        document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
        
      }else { 
        
        roundSecondPlayer=0;
        activePlayer=activePlayer-1;
        document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
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
     
     
   } else if ((activePlayer==1)&&(scoreFirstPlayer+roundFirstPlayer>=100)){
     activePlayer=1
     alert('Le joueur 1 à gagné la partie !!');
     
    
    } else if ((activePlayer==2)&&(scoreSecondPlayer+roundSecondPlayer < 100)){
     scoreSecondPlayer=roundSecondPlayer + scoreSecondPlayer;
     roundSecondPlayer=0;
     document.querySelector('#scoreSecondPlayer').textContent= scoreSecondPlayer;
     document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
     activePlayer=1
     
     
   } else if ((activePlayer==2)&&(scoreSecondPlayer+roundSecondPlayer>= 100)) {
     activePlayer=2
     alert('Le joueur 2 à gagné la partie !!');
     
   }
   }