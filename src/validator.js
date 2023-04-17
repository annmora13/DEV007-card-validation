const validator= {

  maskify: function(cardNumber) {
    return cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4);
  },

  isValid: function(cardNumber){
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
  }
};
export default validator;