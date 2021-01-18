var email = document.getElementById("inputEmail4");
var pw = document.getElementById("pw");
var num = document.getElementById("num");
var numregex = /^([0-9]{10})$/;
var eregex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var flag = false;

function check() {
  if (eregex.test(email.value)) {
    error1.innerText = "Valid";
    error1.style.color = "green";
    if (numregex.test(num.value)) {
      error2.innerText = "Valid";
      error2.style.color = "green";
      if (pregex.test(pw.value)) {
        error3.innerText = "Valid";
        error3.style.color = "green";
        flag = true;
      } else {
        error3.innerText = "Invalid password";
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
