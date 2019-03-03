const BeersData = require('./models/beers_data.js');
const SelectView = require('./views/select_view.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded',  () => {
  console.log('JavaScriptLoaded');

  const selectElement = document.querySelector('#beer-select')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#beers-list')
  const beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beersData = new BeersData();
  beersData.getAllData();
  beersData.bindEvents();



})
