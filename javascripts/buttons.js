const clearInput = (text) => (text.value = "");

let buttonEncrypt = document.getElementById("btn-encriptar");

buttonEncrypt.addEventListener("click", function (event) {
  event.preventDefault();
  let textBox = document.getElementById("input-texto");
  if (checkTextUser(textBox.value)) {
    document.getElementById("msg").value = encrypt(textBox.value);
    clearInput(textBox);
  }
});

let buttonDecrypt = document.getElementById("btn-desencriptar");

buttonDecrypt.addEventListener("click", function (event) {
  event.preventDefault();
  let textBox = document.getElementById("input-texto");
  if (checkTextUser(textBox.value)) {
    document.getElementById("msg").value = decrypt(textBox.value);
    clearInput(textBox);
  }
});

let buttonCopy = document.getElementById("btn-copy");

buttonCopy.addEventListener("click", function (event) {
  event.preventDefault();
  let textCopy = document.getElementById("msg");
  textCopy.select();
  document.execCommand("copy");
  clearInput(textCopy);
});
