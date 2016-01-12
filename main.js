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
      switchTurn();
      checkWin();
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


    if(!spacesRemaining){
      alert("Game Over!\nIt's a draw!");
    }
  };

  function writeTurn(){
    $whoseTurn.text("It's "+whoseTurn.toUpperCase()+"'s turn.");
  };
});
