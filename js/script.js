

function startGame(){
  // Trying to implement Audio
  //var MyMusic = new Audio("../audio/startgame.mp3");
  //MyMusic.play();
  //setInterval(MyMusic.play(), 2000);
  //setTimeout(MyMusic.stop(), 20000);
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
  
  var CatBody = $('.CatBody');
  for(let i=0;i<CatBody.length;i++){
    
    if(CatBody[i].checked){
      CatBody[i].stop();
    }
    else
    {
      animateDiv(CatBody[i]);
    }
  }
  
  //animateDiv('.CatBody.Cat-a');
  // animateDiv('.CatBody.Cat-b');
  // animateDiv('.CatBody.Cat-c');
  // animateDiv('.CatBody.Cat-d');
  // animateDiv('.CatBody.Cat-e');
  // animateDiv('.CatBody.Cat-f');
  // animateDiv('.CatBody.Cat-g');
  // animateDiv('.CatBody.Cat-h');
  // animateDiv('.CatBody.Cat-i');
  // animateDiv('.CatBody.Cat-j');
  // animateDiv('.CatBody.Cat-k');
  // var CatBody = document.querySelectorAll('input[type="radio"]:checked');

  // for(let i =0; i<CatBody.length; i++){
  //   CatBody[i] = console.log(CatBody[i].className);
  // }
  //animateDiv();
};

// Get viewport dimensions (remove the dimension of the div)
function makeNewPosition(){
  
  
  var h = $(window).height() - (32*8);
  var w = $(window).width() - (32*15);
  
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

  instruc.classList.remove('hidden');
  instruc.classList.toggle('flipOutX');
  instruc.classList.toggle('flipInX');
  // instruc.classList.toggle('hidden');
  //var myDiv = $( ".Cat-a" );
  //myDiv.clearQueue();
  // myDiv.stop();
}
