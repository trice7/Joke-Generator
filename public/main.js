// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/functions';
import {
  initialPrompt, deliveryJoke, deliveryPunch, htmlContainer
} from '../utils/htmlelements';
import getRequest from '../api/promises';
import mainButton from '../components/button';

// const pulledJoke = () => {
//   getRequest().then((item) => {
//     if (document.querySelector('#start-btn').addEventListener('click', () => {
//       renderToDom('#app', deliveryJoke(item));
//     }))
//     if (document.querySelector('joke-btn').addEventListener('click', () => {
//       renderToDom('#app', deliveryPunch(item));
//     } ))
//   })
// };

const joke = [];

const displayPunch = (obj) => {
  renderToDom('#joke-container', '');
  renderToDom('#app', '<div id="punch-container"></div>');
};

const displayJoke = (obj) => {
  renderToDom('#app', '');
  renderToDom('#app', '<div id="joke-container"></div>');
};
// const theJoke = [];

// const pulledJoke = () => {
//   getRequest().then((item) => {
//     const newObj = {
//       setup: item.setup,
//       delivery: item.delivery
//     };
//     theJoke.push(newObj);
//   });
// };

const pulledJoke = () => {
  getRequest().then((item) => {
    joke.push(item);
  });
};

const cycle = () => {
  // joke.length = 0;
  document.querySelector('#main-btn').innerHTML = '???';
  renderToDom('#app', deliveryJoke(joke));
  // pulledJoke();
};

const init = () => {
  joke.length = 0;
  renderToDom('#app', '');
  renderToDom('#app', htmlContainer);
  renderToDom('#btn-container', mainButton);
  document.querySelector('#main-btn').innerHTML = 'Press to start laughing!';
  renderToDom('#app', initialPrompt);
  pulledJoke();
};
// console.warn(pulledJoke);

// const getJoke = getRequest().then((item) => item.setup);

// const init = () => {
//   // renderToDom('#app', initialPrompt);
//   // renderToDom('#app', deliveryJoke(testObj));
//   // renderToDom('#app', deliveryPunch(testObj));
//   // console.warn(getRequest);
//   renderToDom('#app', pulledJoke);
// };

// const displayJoke = () => {
//   theJoke.forEach
// };

init();
document.querySelector('#main-btn').addEventListener('click', () => {
  if (document.querySelector('#init-page')) {
    document.querySelector('#main-btn').innerHTML = '???';
    document.querySelector('#app').innerHTML = deliveryJoke(joke);
  } else if (document.querySelector('#joke-page')) {
    document.querySelector('#main-btn').innerHTML = '😆😆 Want another joke?😆😆 ';
    document.querySelector('#app').innerHTML = deliveryPunch(joke);
    joke.length = 0;
    pulledJoke();
  } else if (document.querySelector('#punch-page')) {
    cycle();
  }
});
// document.querySelector('#joke-btn').addEventListener('click', displayPunch);
// console.warn(theJoke[0]);
// console.warn(deliveryJoke(theJoke[0]));
// console.log(theJoke);
console.warn(joke);
