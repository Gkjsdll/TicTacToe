"use strict";

$(document).ready(function(){
  var whoseTurn = pickFirst();
  var $whoseTurn = $('#whoseTurn');
  var $squares = $('.square');
  var spacesRemaining = 9;
  var gameOver = false;

  newGame();
  $squares.click(squareClickHandler);

  function newGame(){
    writeTurn();
    spacesRemaining = 9;
    $squares.text('');
  };

  function squareClickHandler(){
    if(!gameOver){
      var $this = $(this);
      if($this.text() === ""){
        $this.text($this.index());
        checkWin($this);
      }
      else{
        alert("Space already taken");
      }
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
    switch($square.index()){
      case 0:
        checkSquares(1,2);
        checkSquares(3,6);
        checkSquares(4,8);
        break;
      case 1:
        checkSquares(0,2)

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
      default:
        switchTurn();
        break;

    }

    if(!spacesRemaining){
      alert("Game Over!\nIt's a draw!");
      gameOver = true;
    }
    switchTurn();
  };

  function checkSquares(square1, square2){
    var gameOver = $squares.eq(square1).text()+$squares.eq(square2).text() === whoseTurn+whoseTurn;
    if(gameOver){
      alert(whoseTurn + " won!");
    }
    return gameOver;
  }

  function writeTurn(){
    $whoseTurn.text("It's "+whoseTurn.toUpperCase()+"'s turn.");
  };
});
