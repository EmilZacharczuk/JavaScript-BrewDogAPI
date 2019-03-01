const BeersData = require('./models/beers_data.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded',  () => {
  console.log('JavaScriptLoaded');

  const listContainer = document.querySelector('#beers-list')
  const beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beersData = new BeersData();
  beersData.getAllData();



})
