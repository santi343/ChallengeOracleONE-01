const writing = (str) => {
  let arrFromStr = str.split("");
  let i = 0;
  let printStr = setInterval(function () {
    if (arrFromStr[i] === " ") {
      document.querySelector("h1").innerHTML += arrFromStr[i];
      document.querySelector("h1").innerHTML += arrFromStr[i + 1];
      i += 2;
    } else {
      document.querySelector("h1").innerHTML += arrFromStr[i];
      i++;
      document.querySelector("h1").style.backgroundColor = "20px";
    }
    if (i === arrFromStr.length) {
      clearInterval(printStr);
    }
  }, 200);
};

writing("Bienvenido/a a tu Código Secreto!");
