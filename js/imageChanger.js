//Get random Integer between (inclusive) min and max
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeImage()
{
  //Generate random seed here
  var seed = getRandomIntInclusive(1, 21);
  //Get .blur-bg element into a variable
  var bg = document.getElementsByClassName("blur-bg")[0];

  bg.style.backgroundImage = "url('images/bg"+ seed + ".jpg')";
}
