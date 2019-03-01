const PubSub = require('../helpers/pub_sub.js')


const BeersView = function () {

}

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers view:All beers', (evt) => {
    this.render(evt.detail);
  })
};

BeersView.prototype.render = function (arrayOfBeers) {
  const beerDetails = document.createElement('ul')
  arrayOfBeers.forEach(function(beer) {
      const name = beer.name
      const description = beer.description

      console.log(name, description);
    });
};

// BeersView.prototype.getName = function (beer) {
//   const name = this.name
// }
module.exports = BeersView;
