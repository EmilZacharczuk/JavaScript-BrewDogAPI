const BeersData = require('./models/beers_data.js');
const BeersView = require('./views/beers_view.js');

document.addEventListener('DOMContentLoaded',  () => {
  console.log('JavaScriptLoaded');

  const beersData = new BeersData();
  beersData.getAllData();

  const beersView = new BeersView();
  beersView.bindEvents();

})
