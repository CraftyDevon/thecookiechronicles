function game(){

var cookieType = prompt("It's time to take part in the ancient art of cookie baking, shall we make CHOCOLATECHIP, PEANUTBUTTER, or GINGER cookies?").toUpperCase();


switch(cookieType) {
  case 'CHOCOLATECHIP':
    var darkWhite = prompt("Shall we use DARK or WHITE chocolate?").toUpperCase();
    var butterMarg = prompt("Will you use BUTTER or MARGIRINE?").toUpperCase();
    if(darkWhite === 'DARK' || butterMarg === 'BUTTER') {
      var output = document.getElementById("prompts");
      output.innerHTML = "Your heart is true without a doubt, congrats!!";
    } else {
      var output = document.getElementById("prompts");
      output.innerHTML = "What is this maddness, white chocolate chips and Margirine??!?!";
    }
    break;
  case 'PEANUTBUTTER':
    var peanutType = prompt("It's a hard choice to make, but shall we use SMOOTH or CHUNKY peanut butter?").toUpperCase();
    var homemade = prompt("Did you make the peanut butter (YES OR NO)?").toUpperCase();
    if(peanutType === 'CHUNKY' && homemade === 'YES') {
      var output = document.getElementById("prompts");
      output.innerHTML = "Man, you're one committed cookie making machine";
    } else {
      var output = document.getElementById("prompts");
      output.innerHTML = "What kind of sensible person doesn't use chunky peanut butter for a nice texture, or make it themself for that matter?";
    }
    break;
  case 'GINGER':
    var exotic = prompt("Ohhhhh how exotic of you. Have you ever actually had a ginger cookie? (YES OR NO)").toUpperCase();
    var chewyCrisp = prompt("Is your standard Ginger cookie CHEWY or CRISP?").toUpperCase();
    if(exotic === 'YES' || chewyCrisp === 'CRISP') {
      var output = document.getElementById("prompts");
      output.innerHTML = "You appear to know your cookies, best of luck my friend.";
    } else {
      var output = document.getElementById("prompts");
      output.innerHTML = "Come on, who's actually had the pleasure of having a ginger cookie that's not hard as a brick?";
    }
    break;
  default:
    console.log("Pick a cookie type, or else.");
}

}