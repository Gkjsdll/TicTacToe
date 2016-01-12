"use strict";

$(document).ready(function(){
  var whoseTurn = pickFirst();
  var $whoseTurn = $('#whoseTurn');
  var $squares = $('.square');
  var spacesRemaining = 9;
  newGame();
  $squares.click(squareClickHandler);

  function newGame(){
    writeTurn();
    spacesRemaining = 9;
    $squares.text('');
  };

  function squareClickHandler(){
    var $this = $(this);
    if($this.text() === ""){
      $this.text(whoseTurn);
      checkWin($this);
    }
    else{
      alert("Space already taken");
    }
  };

  function pickFirst(){
    if(Math.floor(Math.random()*2)){
      return "x";
    }
    return "o";
  };

  function switchTurn(){
    if(whoseTurn === "x"){
      whoseTurn = "o";
    }
    else{
      whoseTurn = "x";
    }
  };

  function checkWin($square){
    spacesRemaining--;
    var location = $square.index()+1;
    switch(location){
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      default:
        switchTurn();
        break;

    }

    if(!spacesRemaining){
      alert("Game Over!\nIt's a draw!");
    }
    switchTurn();
  };

  function writeTurn(){
    $whoseTurn.text("It's "+whoseTurn.toUpperCase()+"'s turn.");
  };
});
