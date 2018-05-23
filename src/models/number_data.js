const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumberData = function () {
  this.randomNumber = null;
}

NumberData.prototype.getData = function () {
    const request = new Request('http://numbersapi.com/random')
    request.get((data) => {
      this.randomNumber = data[0];
      PubSub.publish('NumberData:number-fact', this.randomNumber);
    })
}

module.exports = NumberData;
