

function startGame(){
  // Trying to implement Audio
  //var MyMusic = new Audio("../audio/startgame.mp3");
  //MyMusic.play();
  //setInterval(MyMusic.play(), 2000);
  //setTimeout(MyMusic.stop(), 20000);
  //Get all the required elements
  var scoreArea = document.getElementById('scoreValue');
  var score = 0; 
  var playArea = document.querySelector('.play-area');
  var BtnStart = document.querySelector('.btnStart');
  var h1 = document.querySelector('h1');
  var timer = document.querySelectorAll('.timer span');
  var gameOver = document.querySelector('.gameOver');

  // playArea.addEventListener('mouseover',function(){
  //   MyMusic.play();
  // });
  // playArea.addEventListener('mouseleave',function(){
  //   MyMusic.stop();
  // });
  gameOver.classList.toggle('gameEnd');
  playArea.classList.toggle('disabled');
  BtnStart.classList.toggle('hidden');
  h1.classList.toggle('hidden');

  for(let i=0;i<timer.length;i++){
    timer[i].classList.add('timer-start');

  }
  //Loop thru the catbody
  var CatBody = $('.CatBody');
  for(let i=0;i<CatBody.length;i++){
    //Change values and get new score
    CatBody[i].onchange = function() {
      score++;
      scoreArea.textContent = score;
      console.log(score);
    }
    //animate the monster
    animateDiv(CatBody[i]);
    
  }
  
};

// Get viewport dimensions (remove the dimension of the div)
function makeNewPosition(){
  
  
  var h = $(window).height() - (32*8);
  var w = $(window).width() - (32*15);
  //getting random values for width and height
  var nh = getRandomValues(-h/2,h/2);
  var nw = getRandomValues(-w/2,w/2);
  // console.log([h,w]);
  // console.log([nh,nw]);
  return [nh,nw];    
 
  
}

//Getting Random Values
//W3school Source
function getRandomValues(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//This will be use for random positioning of Monster
//Source By Lee on April 30,2012 https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 2000, function(){
    animateDiv(myclass);        
  });
  
};

function howToPlay(){
  var instruc = document.querySelector('.howToPlay'); 
  //toggle class on how to play
  instruc.classList.remove('hidden');
  instruc.classList.toggle('flipOutX');
  instruc.classList.toggle('flipInX');
}
