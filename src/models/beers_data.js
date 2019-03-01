const RequestHelper = require('../helpers/request_helper');
const PubSub = require('../helpers/pub_sub.js')

const BeersData = function () {

}

BeersData.prototype.getAllData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers');
  const data = requestHelper.get()
    .then(function(data){
      PubSub.publish('Beers view:All beers', data)
    })

}

module.exports = BeersData;
