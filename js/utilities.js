
function getInputValueById(id){
      const inputValue = document.getElementById(id).value

      return parseFloat(inputValue)
}
function getValueById(id){
      const inputValue = document.getElementById(id).innerText

      return parseFloat(inputValue)
}