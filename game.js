  var level = 0;
  var started = false;

  var gamePattern = [];
  var userpattern = [];

  $(document).keypress(function(event) {
    if (!started) {
      //$("#level-title").text("Level " + level); //selecting h1
      nextsequence();
      started = true; //so that only 1 time keyboard keypress executed
    }

  });


  $(".btn").click(function() {
    var buttonClicked = $(this).attr("id"); //selecting a button id
    userpattern.push(buttonClicked);
    sound(buttonClicked);
    animation(buttonClicked);
    game(userpattern.length - 1); //game(0)/length is 1 and minus 1
  });


  function game(currentLevel) {
    if (gamePattern[currentLevel] === userpattern[currentLevel]) { //both array equal like gamePattern[0]=gamePattern[0]
      console.log("success");
      if (userpattern.length === gamePattern.length) { //last of userclick is equal to last gamepattern
        setTimeout(function() {
          nextsequence();
        }, 1000);
      }
    } else {
      console.log("failed");
      //var audioWrongButton= new Audio("sounds/"+userpattern[currentLevel]+".mp3");
      //audioWrongButton.play();
      $("body").addClass("game-over");
      //sound("wrong");//sending the string wrong to sound
      var audio1 = new Audio("sounds/wrong.mp3");
      audio1.play();
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      level = 0; //game over restarting game
      started = false; //again starting from the keypress

    }
  }

  function nextsequence() {

    level++; //level goes 1 from 0
    $("#level-title").text("Level " + level); //h1 changes to level 1
    var buttonColours = ["red", "blue", "green", "yellow"]; //array of buttons
    var random = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[random]; // buttonColours[0]=red
    gamePattern.push(randomChosenColour); // gamepattern array has now red button
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomChosenColour);

  }


  function sound(name) {
    var audio = new Audio("sounds/" + name + ".mp3"); // sounds/blue.mp3
    audio.play();
  }

  function animation(name) {
    var activebutton = $("." + name);
    activebutton.addClass("pressed");
    setTimeout(function() {
      activebutton.removeClass("pressed");
    }, 100);

  }
