'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'));
    } else {
      this.allProducts.push(new Product(productNames[i]));
    }
  }

};

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  const dataToSave = JSON.stringify(this.allProducts);
  localStorage.setItem('productData', dataToSave);
  console.log("Product data saved to localStorage:", dataToSave);
};
AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  const savedData = localStorage.getItem('productData');

  // If there's saved data, parse and use it; otherwise, instantiate new Products
  if (savedData) {
    this.allProducts = JSON.parse(savedData);
    console.log("Product data loaded from localStorage:", this.allProducts);
  } else {
    console.log("No saved product data found in localStorage. Instantiating new Products...");
    this.instantiateProducts();
  }
};




function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
