const input = document.getElementById("pass");
const lenght = 12;
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symb = "!@#$%^&*[]()_-+=<>,?";

const char = upper + lower + num + symb;

function create() {
  let password = "";

  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symb[Math.floor(Math.random() * symb.length)];

  while (lenght > password.length) {
    password += char[Math.floor(Math.random() * char.length)];
  }

  input.value = password;
}

function copy() {
  input.select();
  document.execCommand("copy");
}
