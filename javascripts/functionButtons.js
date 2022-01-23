const vocales = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const encrypt = (textToEncrypt) => {
  let textEncrypt = "";
  for (let i = 0; i < textToEncrypt.length; i++) {
    textEncrypt += vocales[textToEncrypt[i]] || textToEncrypt[i];
  }
  return textEncrypt;
};

const decrypt = (textToDecrypt) => {
  let textDecrypt = textToDecrypt;
  for (const e in vocales) {
    textDecrypt = textDecrypt.replaceAll(vocales[e], e);
  }
  return textDecrypt;
};
