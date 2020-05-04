'use strict';

console.log('App is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Title',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderNewPic();
  }
};
var reset = function reset() {
  app.options = [];
  renderNewPic();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

var renderNewPic = function renderNewPic() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      app.subtitle && app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options && app.options.length > 0 ? 'Here are your options' : 'no options yet'
    ),
    React.createElement(
      'button',
      { disabled: !app.options.length, onClick: onMakeDecision },
      'What Should I do?'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');

renderNewPic();
