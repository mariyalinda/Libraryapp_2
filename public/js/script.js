function checkForm() {
  var email = document.getElementById("email");
  var pw = document.getElementById("pw");
  var num = document.getElementById("mobile");
  var username = document.getElementById("username");
  var numregex = /^([0-9]{10})$/;
  var eregex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  var pregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
  var flag = false;

  if (eregex.test(email.value)) {
    error1.innerText = "Valid";
    error1.style.color = "green";

    if (numregex.test(num.value)) {
      error2.innerText = "Valid";
      error2.style.color = "green";

      if (pregex.test(pw.value)) {
        error3.innerText = "Valid";
        error3.style.color = "green";

        if (username.value.trim().length > 2) {
          error4.innerText = "Valid";
          error4.style.color = "green";
          return true;
        } else {
          error4.innerText = "Username must contain atleast 3 characters";
          error4.style.color = "red";
        }
      } else {
        error3.innerText =
          "Your password must contain atleast 4 characters, atleast one uppercase letter,one lowercase letter and one number";
        error3.style.color = "red";
      }
    } else {
      error2.innerText = "Invalid phone number";
      error2.style.color = "red";
    }
  } else {
    error1.innerText = "Invalid email";
    error1.style.color = "red";
  }
  return flag;
}
