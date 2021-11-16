const text = document.querySelector("input");
let password = "";
function generate(length) {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * chars.length);

    password += chars[random];
  }
  text.value = password;
}
function copyPassword() {
  text.select();

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text.value);

  /* Alert the copied text */
  alert("Copied the text: " + text.value);
}
document.getElementById("generate").addEventListener("click", function () {
  generate(10);
});

document.getElementById("copy").addEventListener("click", function () {
  copyPassword();
});
