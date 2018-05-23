const PubSub = require('../helpers/pub_sub.js')

// const NumberFormView = function (form) {
//   this.form = form;
// };
//
// NumberFormView.prototype.bindEvents = function () {
//   this.form.addEventListener('submit', (evt) => {
//     this.handleSubmit(evt);
//   })
// };
//
// NumberFormView.prototype.handleSubmit = function (evt) {
//   evt.preventDefault();
//   PubSub.publish('NumberFormView:submit', evt.target.number.value);
// };


const NumberFormView = function (container) {
  this.container = container;
};

NumberFormView.prototype.bindEvents = function () {
  PubSub.subscribe('NumberData:number-fact', (evt) => {
    this.render(evt.detail);
  })
};

NumberFormView.prototype.render = function (randomNumber){
  const numberValue = document.createElement('p');
  const numberFact = document.createElement('p');
  numberValue.textContent = randomNumber.number;
  numberFact.textContent = randomNumber.text;
  this.container.appendChild(numberValue);
  this.container.appendChild(numberFact);
}

module.exports = NumberFormView;
