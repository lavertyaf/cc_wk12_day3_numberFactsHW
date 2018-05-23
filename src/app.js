const NumberFormView = require('./views/number_form_view');
const NumberData = require('./models/number_data.js');

document.addEventListener('DOMContentLoaded', () => {
  const numberData = new NumberData();
  numberData.getData();

  const numberContainer = document.querySelector('#number-fact');

  const numberFormView = new NumberFormView(numberContainer);
  numberFormView.bindEvents();
});
