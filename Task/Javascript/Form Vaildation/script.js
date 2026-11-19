function validation(inp, err) {
  if (inp.value == "" || inp.value == null) {
    err.innerHTML = "Please enter required data";
    err.style.color = "red";
    inp.style.border = "2px solid red";
    return false;
  } else if (inp.id == "fnm" || inp.id == "lnm") {
    if (!/^[A-Za-z]+$/.test(inp.value)) {
      err.innerHTML = "Please enter letters only";
      err.style.color = "red";
      inp.style.border = "2px solid red";
      return false;
    }
  } else if (inp.id == "mb") {
    if (!/^[0-9]{10}$/.test(inp.value)) {
      err.innerHTML = "Enter valid 10 digit number";
      err.style.color = "red";
      inp.style.border = "2px solid red";
      return false;
    }
  } else if (inp.id == "em") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) {
      err.innerHTML = "Enter valid email";
      err.style.color = "red";
      inp.style.border = "2px solid red";
      return false;
    }
  } else if (inp.id == "psw") {
    if (inp.value.length < 6) {
      err.innerHTML = "Password must be 6 characters";
      err.style.color = "red";
      inp.style.border = "2px solid red";
      return false;
    }
  } else if (inp.id == "cpsw") {
    if (inp.value != document.getElementById("psw").value) {
      err.innerHTML = "Password does not match";
      err.style.color = "red";
      inp.style.border = "2px solid red";
      return false;
    }
  }

  err.innerHTML = "";
  inp.style.border = "2px solid green";
  return true;
}

function formValidation() {
  let a = validation(fnm, fnmerr);
  let b = validation(lnm, lnmerr);
  let c = validation(mb, mberr);
  let d = validation(em, emerr);
  let e = validation(gen, generr);
  let f = validation(psw, pswerr);
  let g = validation(cpsw, cpswerr);

  if (a && b && c && d && e && f && g) {
    alert("Registration Successful!");
    return true;
  } else {
    return false;
  }
}
