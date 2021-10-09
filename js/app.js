alert("❤️ WELCOME ❤️");
let quastion = prompt("whos there?");
let username = "admin";
let password = "themaster";

uservalidation();

// username validation

function uservalidation() {
  if (quastion === username) {
    pass();
  } else if (quastion > username) {
    alert("❗❗❗ i dont know you ❗❗❗");
  }
}

// password validation

function pass() {
  let pas = prompt("password?");
  if (pas < password) {
    alert("❌❌❌ Wrong Password ❌❌❌");
  } else if (pas === password) {
    alert("✅ WELCOME ✅");
  }
}
