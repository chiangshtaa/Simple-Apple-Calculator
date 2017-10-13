let expressions = '';
let curr = '';
const display = document.getElementById('display');
let oper = ['-', '+', '*', '/'];

[...document.getElementsByClassName('num number')].forEach((num) => {
  num.addEventListener('click', event => {
    curr += event.target.innerText;
    display.innerText = curr;
  });
});

[...document.getElementsByClassName('num operator')].forEach((operator) => {
  operator.addEventListener('click', event => {
    expressions += curr;
    expressions.trim();
    if (oper.indexOf(expressions[expressions.length - 1]) !== -1) {
      expressions = expressions.slice(0, expressions.length - 1) + event.target.innerText;
    } else {
      let valid = eval(expressions);
      if (valid || valid === 0) {
        expressions = valid;
        display.innerText = valid;
      }
      curr = '';
      expressions += event.target.innerText;
      if (expressions[expressions.length - 1] === '-') {
        expressions += ' ';
      }
    }
  });
});

document
  .getElementById('equals')
  .addEventListener('click', () => {
    expressions += curr;
    let valid = eval(expressions);
    if (valid || valid === 0) {
      display.innerText = valid;
    }
    curr = '';
  })

document
  .getElementById('AC')
  .addEventListener('click', () => {
    expressions = '';
    curr = '';
    display.innerText = '0';
  })

document
  .getElementById('percent')
  .addEventListener('click', () => {
    curr = curr/100;
    display.innerText = curr;
  })

document
  .getElementById('switch')
  .addEventListener('click', () => {
    curr *= -1;
    display.innerText = curr;
  })

