import validator from "./validator.js";

/*function maskify(cardNumber) {
  return cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4);
}
  
function (cardNumber) {
  let sum = 0;
  let isEven = false;
  
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);
  
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
  
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}*/


const validateButton= document.getElementById("validate") 
validateButton.addEventListener('click',()=>{

  const cardNumber = document.getElementById("cardNumber").value;

  const maskedCardNumber = validator.maskify(cardNumber);

  const isValid = validator.isValid(cardNumber);

  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = isValid
    ? `El número de tarjeta ${maskedCardNumber} es válido.`
    : `El número de tarjeta ${maskedCardNumber} no es válido.`;
})

