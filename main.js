$(document).ready(function(){
  var whoseTurn = pickFirst();
  var $whoseTurn = $('#whoseTurn');

  newGame();

  function newGame(){
    writeTurn();
  }

  function pickFirst(){
    if(Math.floor(Math.random()*2)){
      return "x";
    }
    return "o";
  }

  function writeTurn(){
    $whoseTurn.text("It's "+whoseTurn.toUpperCase()+"'s turn.");
  }
});
