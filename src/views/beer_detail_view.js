const BeerDetailView = function () {

}

BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-datail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const detailsList = document.createElement('ul')

  const description = this.createDetailListItem('Description', beer.description);
  detailsList.appendChild(description);

  beerDetail.appendChild(detailsList);
  return beerDetail;
};

BeerDetailView.prototype.createDetailListItem = function (label, property) {;
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element
};
module.exports = BeerDetailView;
