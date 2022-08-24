const inputText = document.querySelector(".input-Text");
const messaje = document.querySelector(".messaje");

function btnEncrypt() {
  const encryptText = encrypted(inputText.value);
  messaje.value = encryptText;
  messaje.style.backgroundImage = "none";
  inputText.value = "";
}

function encrypted(stringEncrypt) {
  let arrCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncrypt = stringEncrypt.toLowerCase();

  for (let i = 0; i < arrCode.length; i++) {
    if (stringEncrypt.includes(arrCode[i][0])) {
      stringEncrypt = stringEncrypt.replaceAll(arrCode[i][0], arrCode[i][1]);
    }
  }
  return stringEncrypt;
}

function btnDecrypt() {
  const dencryptText = decrypted(inputText.value);
  messaje.value = dencryptText;
  inputText.value = "";
}

function decrypted(stringDecrypt) {
  let arrCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDecrypt = stringDecrypt.toLowerCase();

  for (let i = 0; i < arrCode.length; i++) {
    if (stringDecrypt.includes(arrCode[i][0])) {
      stringDecrypt = stringDecrypt.replaceAll(arrCode[i][1], arrCode[i][0]);
    }
  }
  return stringDecrypt;
}

function copy() {
  messaje.select();
  navigator.clipboard.writeText(messaje.value);
  messaje.value = "";
  alert("Copied text");
}
