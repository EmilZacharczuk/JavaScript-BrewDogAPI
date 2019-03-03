const RequestHelper = require('../helpers/request_helper');
const PubSub = require('../helpers/pub_sub.js')

const BeersData = function () {
  this.beersData = [];
  this.beerNames = [];
}

BeersData.prototype.getAllData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers');
  requestHelper.get()
      .then((data) => {
      this.beersData = data;
      PubSub.publish('Beers view:All beers', this.beersData)
      this.publishBeersNames(data);
    });

}

BeersData.prototype.publishBeersNames = function (data) {
  this.beersData = data;
  this.beerNames = this.beersNamesList();
  console.log(this.beerNames);
  PubSub.publish('Beers:list of names', this.beerNames)

};
BeersData.prototype.beersNamesList = function () {
    const fullList = this.beersData.map(beer => beer.name)
    return fullList;
};

BeersData.prototype.bindEvents = function () {
  PubSub.subscribe('Select View:change', (evt) => {
    const beerNameIndex = evt.detail;
    this.publishBeerByName(beerNameIndex);
  })

BeersData.prototype.publishBeerByName = function (beerNameIndex) {
    const selectedBeer = []
    const selectedBeerName = this.beersData[beerNameIndex];
    selectedBeer.push(selectedBeerName)
    PubSub.publish('Beers view:All beers', selectedBeer)
    console.log(selectedBeer);
};


}
module.exports = BeersData;
