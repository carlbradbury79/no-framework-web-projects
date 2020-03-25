const currencyDropOne = document.getElementById('currency-one');
const currencyDropTwo = document.getElementById('currency-two');

const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch rates and update DOM
function calculate() {
  const currency_one = currencyDropOne.value;
  const currency_two = currencyDropTwo.value;
  console.log(currency_one, currency_two);

  fetch(
    `https://prime.exchangerate-api.com/v5/cb0c5ac7bfb0439408d14ad5/latest/${currency_one}`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const rate = data.conversion_rates[currency_two];
      console.log(currency_one, currency_two, rate);
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

currencyDropOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyDropTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyDropOne.value;
  currencyDropOne.value = currencyDropTwo.value;
  currencyDropTwo.value = temp;
  calculate();
});

calculate();
