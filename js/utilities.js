
function getInputValueById(id){
      const inputValue = document.getElementById(id).value
      const inputValueNumber = parseFloat(inputValue)
      return inputValueNumber
}

function  getTextFieldValue(id){
      const textValue = document.getElementById(id).innerText
      const textNumber = parseFloat(textValue)

      return textNumber;  
}
