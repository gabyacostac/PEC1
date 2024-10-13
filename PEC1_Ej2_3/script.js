const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const movieOptions = document.querySelectorAll('.movie-option');
const currency = document.getElementById('currency');
const currencyCodeTotal = document.getElementById('currency-code-total');

let ticketPrice = +movieSelect.value;
let currencyCode = currency.value;

// Initial count and total set
updateSelectedCount();

// Populate UI
populateUI();

// Set currency 
function setCurrency(rate) {
  movieOptions.forEach((option) => {
    option.innerText = option.innerText.replace(/\s*\(.*$/, '');
    option.innerText += ` (${(option.value * rate).toFixed(2)} ${currency.value})`
  })
  
  currencyCodeTotal.innerText = ` ${currency.value}`;
}

// Fetch rates information
async function fetchRate(currencyCode) {
  const res = await fetch(`https://v6.exchangerate-api.com/v6/5e8c98d118ec7f34982336f6/latest/USD`);

    if (!res.ok) {
      throw new Error('Could not load exchange rates')
    }

  const data = await res.json();
  const rate = data.conversion_rates[currencyCode];
  return rate;
};

// Update total and count
 async function updateSelectedCount() {
  try {
    const rate = await fetchRate(currencyCode);
    setCurrency(rate);
    const selectedCurrencyRate = rate;
  
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
    // Copy selected seats into an array
    // Map through array
    // Return a new array of indexes
  
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
  
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    total.innerText = (selectedSeatsCount * ticketPrice * selectedCurrencyRate).toFixed(2);
  } catch (error) {
    console.log(error);
  }
}

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Save selected currency index
function setCurrencyIndex(currencyIndex) {
  localStorage.setItem('selectedCurrencyIndex', currencyIndex);
}

// Get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
  if(selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice')
  if(selectedMoviePrice !== null) {
    movieSelect.value = selectedMoviePrice;
  }

  const selectedCurrencyIndex = localStorage.getItem('selectedCurrencyIndex')
  if(selectedCurrencyIndex !== null) {
    currency.selectedIndex = selectedCurrencyIndex;
  }
}

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }

  updateSelectedCount();
})

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})

// Currency select event
currency.addEventListener('change', e => {
  currencyCode = e.target.value;
  setCurrencyIndex(e.target.selectedIndex);
  setCurrency();
  updateSelectedCount();
})
