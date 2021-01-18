function validate() {
  var flag = false;
  var user = document.getElementById("username");
  var pw = document.getElementById("pw");
  if (user.value == "admin") {
    if (pw.value == "12345") {
      return true;
    } else {
      error2.innerText = "Invalid password";
      error2.style.color = "red";
      error1.innerText = "Valid username";
      error1.style.color = "green";
    }
  } else {
    error1.innerText = "Invalid username";
    error1.style.color = "red";
  }
  return false;
}

function infocheck() {
  var title = document.getElementById("title");
  var authorname = document.getElementById("author");
  var place = document.getElementById("place");
  var genre = document.getElementById("genre");
  if (
    title.value.trim().length > 1 &&
    authorname.value.trim().length > 2 &&
    place.value.trim().length > 2 &&
    genre.value.trim().length > 2
  ) {
    return true;
  } else {
    error1.innerText = "INCOMPLETE DETAILS!";
    error1.style.color = "red";
  }
  return false;
}
