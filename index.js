var level=0;
var started=false;
$(document).keypress(function(event) {
  if(!started)
  {
  $("#level-title").text("Level "+level);
  nextsequence();
  started=true;
}
});

$(".btn").click(function()
{
  //cant select buttons by numbers and send the parameters to sound as sound takes number input and our buttons hame string names
});

function nextsequence()
{
    var random = Math.floor(Math.random() * 4) + 1;
  level++;
  $("#level-title").text("Level " + level);
  sound(random);
}

function sound(random) {
  //  var random = Math.floor(Math.random() * 4) + 1;
  animation(random);
  switch (random) {
    case 1:
      var audio1 = new Audio("sounds/green.mp3");
      audio1.play();
      break;
    case 2:
      var audio2 = new Audio("sounds/red.mp3");
      audio2.play();
      break;
    case 3:
      var audio3 = new Audio("sounds/yellow.mp3");
      audio3.play();
      break;
    case 4:
      var audio4 = new Audio("sounds/blue.mp3");
      audio4.play();
      break;

    default:
      console.log("press any key");
      break;
  }
}


function animation(random) {
  if (random == 1) {
    var activebutton1 = $(".green").addClass("pressed");
    setTimeout(function() {
      activebutton1.removeClass("pressed");
    }, 100);
  } else if (random == 2) {
    var activebutton2 = $(".red").addClass("pressed");
    setTimeout(function() {
      activebutton2.removeClass("pressed");
    }, 100);
  } else if (random == 3) {
    var activebutton3 = $(".yellow").addClass("pressed");
    setTimeout(function() {
      activebutton3.removeClass("pressed");
    }, 100);
  } else {
    var activebutton4 = $(".blue").addClass("pressed");
    setTimeout(function() {
      activebutton4.removeClass("pressed");
    }, 100);
  }
}

function levelup(contentkey) {

}
