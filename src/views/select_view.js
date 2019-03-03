const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:list of names', (evt) => {
    this.populateSelect(evt.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log(selectedIndex);
    PubSub.publish('Select View:change', selectedIndex);
  });
};


SelectView.prototype.populateSelect = function (beerNames) {
  beerNames.forEach((beer, index) => {
    const option = this.createBeerNameOption(beer, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createBeerNameOption = function (beer, index) {
  const option = document.createElement('option');
  option.textContent = beer;
  option.value = index;
  return option;
};

module.exports = SelectView;
