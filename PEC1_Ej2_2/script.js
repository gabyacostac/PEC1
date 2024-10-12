const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const message = document.getElementById('message');
const loader = document.getElementById('loader');

// Fecth exchange rates and update the DOM
function calculate() {
  loader.style.visibility = 'visible';
  setTimeout(() => {
    if (amountEl_one.value < 0) {
      amountEl_one.value = 1;
      message.style.visibility = 'visible';
      setTimeout(() => {
        message.style.visibility = 'hidden';
      }, "5000");
    } else {
  
      const currency_one = currencyEl_one.value;
      const currency_two = currencyEl_two.value;
  
      fetch(`https://v6.exchangerate-api.com/v6/5e8c98d118ec7f34982336f6/latest/${currency_one}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Could not load exchange rates')
        }
        return res.json()})
      .then(data => {
        // console.log(data);
        const rate = data.conversion_rates[currency_two];
  
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
  
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      })
      .catch(e => {
        if (e instanceof TypeError) {
          rateEl.innerText = `Error: Could not load exchange rates`;
        } else {
          rateEl.innerText = `Error: ${e.message}`;
        }
      })
      .finally(() => {
        loader.style.visibility = 'hidden';
      })
    }
  }, "1000");
  
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
})


calculate();