"use strict";

$(document).ready(function(){
  var whoseTurn;
  var $whoseTurn = $('#whoseTurn');
  var $squares = $('.square');
  var spacesRemaining = 9;
  var gameOver = false;
  var $covers = $('.cover');
  var $newGames = $('.newGame');
  var $xWin = $('#xWin');
  var $oWin = $('#oWin');
  var $noWin = $('#noWin');

  $newGames.click(newGame);

  newGame();
  $squares.click(squareClickHandler);

  for(var i = 0; i < $squares.length; i++){ //sets squares to appropriate locations
    $squares.eq(i).css('top', Math.floor(i/3)*128+'px');
    $squares.eq(i).css('left', (i%3)*128+'px');
  }

  function newGame(){
    whoseTurn = pickFirst();
    writeTurn();
    spacesRemaining = 9;
    gameOver = false;
    $squares.text('');
    $squares.css("cursor","pointer");
    $xWin.css('visibility', "hidden");
    $oWin.css('visibility', "hidden");
    $noWin.css('visibility', "hidden");
    $covers.css('visibility', 'hidden');
  };

  function squareClickHandler(){
    if(!gameOver){
      var $this = $(this);
      if($this.text() === ""){
        $this.text(whoseTurn);
        $this.css("cursor","default");
        checkWin($this);
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
    }
    if(!spacesRemaining && !gameOver){
      noWin();
    }
    switchTurn();
    writeTurn();
  };

  function checkSquares(square1, square2){
      if ($squares.eq(square1).text()+$squares.eq(square2).text() === whoseTurn+whoseTurn){
        if(whoseTurn === "x"){
          xWin();
        }
        else{
          oWin();
        }
      }
  }

  function writeTurn(){
    $whoseTurn.text("It's "+whoseTurn.toUpperCase()+"'s turn.");
  };

  function xWin(){
    gameOver = true;
    $xWin.css("visibility", "visible");
    $covers.css("visibility","visible");
  };

  function oWin(){
    gameOver = true;
    $oWin.css("visibility", "visible");
    $covers.css("visibility","visible");
  };

  function noWin(){
    gameOver = true;
    $noWin.css("visibility", "visible");
    $covers.css("visibility","visible");
  };
});
