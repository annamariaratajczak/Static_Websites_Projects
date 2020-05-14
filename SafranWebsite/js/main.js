function clickButton() {

  var delayInMilliseconds = 300;
  setTimeout(function() {

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className = "topnav closed";
    } else {
      x.className = "topnav";
    }

  }, delayInMilliseconds)


  var x = document.getElementById("x-button");

  if (x.className === "x-closed" || x.className === "") {
    x.classList.remove("x-closed")
    x.offsetWidth;
    x.classList.add("x-open")
  } else {
    x.classList.remove("x-open")
    x.offsetWidth;
    x.classList.add("x-closed")
  }
}
