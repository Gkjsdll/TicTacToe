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
        $this.text(whoseTurn);
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
        checkSquares(0,2);
        checkSquares(4,7);
        break;
      case 2:
        checkSquares(0,1);
        checkSquares(4,6);
        checkSquares(5,8);
        break;
      case 3:
        checkSquares(0,6);
        checkSquares(4,5);
        break;
      case 4:
      for(var i = 0; i < 4; i++){
        checkSquares(i, 8-i);
      }
        // checkSquares(0,8);
        // checkSquares(1,7);
        // checkSquares(2,6);
        // checkSquares(3,5);
        break;
      case 5:
        checkSquares(2,8);
        checkSquares(3,4);
        break;
      case 6:
        checkSquares(0,3);
        checkSquares(2,4);
        checkSquares(7,8);
        break;
      case 7:
        checkSquares(1,4);
        checkSquares(6,8);
        break;
      case 8:
        checkSquares(0,4);
        checkSquares(2,5);
        checkSquares(6,7);
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
      alert(whoseTurn.toUpperCase() + " won!");
    }
    return gameOver;
  }

  function writeTurn(){
    $whoseTurn.text("It's "+whoseTurn.toUpperCase()+"'s turn.");
  };
});
