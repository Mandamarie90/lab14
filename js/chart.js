'use strict';
// Step 1: Instantiate a new AppState
const appState = new AppState();

// Step 2: Use the method to load vote data from localStorage
appState.loadItems();

// Step 3: Create a data object for Chart.js using the allProducts array
const data = {
  labels: appState.allProducts.map(product => product.name),
  datasets: [{
    label: 'Product Votes',
    data: appState.allProducts.map(product => product.timesClicked),
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Example color for votes
    borderColor: 'rgba(54, 162, 235, 1)', // Example color for votes
    borderWidth: 1
  }, {
    label: 'Number of Views',
    data: appState.allProducts.map(product => product.timesShown),
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Example color for views
    borderColor: 'rgba(255, 99, 132, 1)', // Example color for views
    borderWidth: 1
  }]
};

// Step 4: Combine the data object with configuration information for Chart.js
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Step 5: Call Chart.js with the configuration and the canvas element
const canvasElem = document.getElementById('chart'); // Assuming 'chart' is the ID of your canvas element
const myChart = new Chart(canvasElem, config);
