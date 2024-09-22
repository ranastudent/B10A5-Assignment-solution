
// console.log('conceted');

// event Listener for noakhali

document.getElementById('donation-now-1').addEventListener('click', function () {

      const inputValue = getInputValueById('inpiut-donation-1')
      const balance = getTextFieldValue('available-blance')
      const amount = getTextFieldValue('noakhali-amount')

      if (inputValue <= 0 || isNaN(inputValue) || inputValue > balance) {
            alert('you can not donation money')
            const modal = document.getElementById('my_modal_1')
            modal.classList.add('hidden')
            return;
      }
      else {
            document.getElementById('noakhali-amount').innerText = amount + inputValue
            document.getElementById('available-blance').innerText = balance - inputValue

      }
      

})

// event Listener for fenni

document.getElementById('donation-now-2').addEventListener('click', function () {

      const inputValue = getInputValueById('input-donation-2')
      const balance = getTextFieldValue('available-blance')
      const amount = getTextFieldValue('fenni-amount')

      if (inputValue <= 0 || isNaN(inputValue) || inputValue > balance) {
            alert('you can not donation money')
            const modal = document.getElementById('my_modal_1')
            modal.classList.add('hidden')
            return;
      }
      else {
            document.getElementById('fenni-amount').innerText = amount + inputValue
            document.getElementById('available-blance').innerText = balance - inputValue

      }

})

// event Listener for Quota-protester

document.getElementById('donation-now-3').addEventListener('click', function () {

      const inputValue = getInputValueById('input-donation-3')
      const balance = getTextFieldValue('available-blance')
      const amount = getTextFieldValue('injuries-amount')

      if (inputValue <= 0 || isNaN(inputValue) || inputValue > balance) {
            alert('you can not donation money')
            const modal = document.getElementById('my_modal_1')
            modal.classList.add('hidden')
            return;
      }
      else {
            document.getElementById('injuries-amount').innerText = amount + inputValue
            document.getElementById('available-blance').innerText = balance - inputValue

      }

})

// btn functionally
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
//history btn functionally
 historyBtn.addEventListener('click', function () {
      // const donationBtn = document.getElementById('donation-btn')
      donationBtn.classList.remove('bg-btn-primary')
      
      historyBtn.classList.add('bg-btn-primary')

      document.getElementById('main').classList.add('hidden')
})
//donation btn functionally
 donationBtn.addEventListener('click', function () {
      // const donationBtn = document.getElementById('donation-btn')
      historyBtn.classList.remove('bg-btn-primary')
      donationBtn.classList.add('bg-btn-primary')
      document.getElementById('main').classList.remove('hidden')
})