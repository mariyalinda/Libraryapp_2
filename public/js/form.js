function validate() {
  var user = document.getElementById("username");
  var pw = document.getElementById("pw");
  if (user.value.trim().length > 2 && pw.value.trim().length > 4) {
    return true;
  } else {
    error.innerText = "INCOMPLETE DETAILS!";
    error.style.color = "red";
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
