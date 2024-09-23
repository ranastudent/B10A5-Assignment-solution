
// console.log('conceted');

// event Listener for noakhali

document.getElementById('donation-now-1').addEventListener('click', function () {

      const inputValue = getInputValueById('input-donation-1')
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

      const head = document.getElementById('head1').innerText
      const historyItem = document.createElement('div')
      historyItem.className = "bg-white p-3 my-10  rounded-md border-1 border-indigo-500"
      historyItem.innerHTML = ` 
                  <p class="text-2xl font-bold text-black-500">${amount + inputValue} Taka ${head}</p>
                  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}</p>
                  
      `
      const historyContainar = document.getElementById('history-container');

      historyContainar.insertBefore(historyItem, historyContainar.firstChild)


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

      const head = document.getElementById('head2').innerText
      const historyItem = document.createElement('div')
      historyItem.className = "bg-white p-3 my-10  rounded-md border-1 border-indigo-500"
      historyItem.innerHTML = ` 
                  <p class="text-2xl font-bold text-black-500">${amount + inputValue} Taka ${head}</p>
                  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}</p>
                  
      `
      const historyContainar = document.getElementById('history-container');

      historyContainar.insertBefore(historyItem, historyContainar.firstChild)





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

      const head = document.getElementById('head3').innerText
      const historyItem = document.createElement('div')
      historyItem.className = "bg-white p-3 my-10  rounded-md border-1 border-indigo-500"
      historyItem.innerHTML = ` 
                  <p class="text-2xl font-bold text-black-500">${amount + inputValue} Taka ${head}</p>
                  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}</p>
                  
      `
      const historyContainar = document.getElementById('history-container');

      historyContainar.insertBefore(historyItem, historyContainar.firstChild)





})

// history section



// btn functionally
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')

//history btn functionally
historyBtn.addEventListener('click', function () {
      // const donationBtn = document.getElementById('donation-btn')
      donationBtn.classList.remove('bg-btn-primary')

      historyBtn.classList.add('bg-btn-primary')

      document.getElementById('donation-noakhali').classList.add('hidden')
      document.getElementById('donation-fenni').classList.add('hidden')
      document.getElementById('donation-injures').classList.add('hidden')
      document.getElementById('history-container').classList.remove('hidden')
      document.getElementById('nav').classList.remove('fixed')
      document.getElementById('history-header').classList.remove('hidden')





})
//donation btn functionally
donationBtn.addEventListener('click', function () {
      // const donationBtn = document.getElementById('donation-btn')
      historyBtn.classList.remove('bg-btn-primary')
      donationBtn.classList.add('bg-btn-primary')
      // document.getElementById('main-div').classList.remove('hidden')
      document.getElementById('donation-noakhali').classList.remove('hidden')
      document.getElementById('donation-fenni').classList.remove('hidden')
      document.getElementById('donation-injures').classList.remove('hidden')
      document.getElementById('history-container').classList.add('hidden')
      document.getElementById('nav').classList.add('fixed')
      document.getElementById('history-header').classList.add('hidden')


})