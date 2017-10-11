//when page had loaded, call all of the functions inside of this function
$(document).ready(function() {
  disableBtns();
  userInputListener();
  clearButtonListener();
  generateRandomNumber();
});

function disableBtns() {
  $('.guess-btn').removeClass('enabled-btn').addClass("disabled-btn").attr('disabled', true);
};

function enableBtns() {
  $('.guess-btn').attr('disabled', false).removeClass("disabled-btn").addClass("enabled-btn");
} 

function userInputListener() {
  $('.user-input').keyup(function(){
    if( $('.user-input').val() != ''  ) {
      enableBtns();
    } else {
      disableBtns();
    }
  })
}

function clearButtonListener() {
  $('#clear-button').click(function(){
    disableBtns();
  })
}

var lastUserGuess;

function guessDisplayListener() {
  lastUserGuess = $('.user-input')[0].value
  $($('.guess-display')[0]).text(lastUserGuess);
  compareGuess() 
}

$('.guess-btn').on('click', guessDisplayListener)

var randomNumber; 
function generateRandomNumber() {
  randomNumber=Math.floor(Math.random()*100)
}

function compareGuess() {
  if(lastUserGuess > randomNumber){
    $($('.hint')[0]).text('Too high!');
  }
  else if(lastUserGuess < randomNumber){
    $($('.hint')[0]).text('Too low!');
  }
  else
     $($('.hint')[0]).text('Boom!')
  }






