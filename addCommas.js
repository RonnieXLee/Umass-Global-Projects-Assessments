function addCommas(number) {
    const numberString = String(number);
    let result = "";
    let decimalPart = "";
  
    if (numberString.includes(".")) {
      const parts = numberString.split(".");
      numberString = parts[0];
      decimalPart = `.${parts[1]}`;
    }
  
    let count = 0;
    for (let i = numberString.length - 1; i >= 0; i--) {
      result = numberString[i] + result;
      count++;
  
      if (count % 3 === 0 && i !== 0) {
        result = "," + result;
      }
    }
  
    return result + decimalPart;
  }
  
  module.exports = addCommas;
  