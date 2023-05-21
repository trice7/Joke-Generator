// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/functions';
import {
  initialPrompt, deliveryJoke, deliveryPunch,
} from '../utils/htmlelements';
import getRequest from '../api/promises';
import mainButton from '../components/button';

const joke = [];

const pulledJoke = () => {
  getRequest().then((item) => {
    joke.push(item);
  });
};

const cycle = () => {
  document.querySelector('#main-btn').innerHTML = '???';
  renderToDom('#app', deliveryJoke(joke));
};

const init = () => {
  joke.length = 0;
  renderToDom('#app', '');
  renderToDom('#btn-container', mainButton);
  document.querySelector('#main-btn').innerHTML = 'Press to start laughing!';
  renderToDom('#app', initialPrompt);
  pulledJoke();
};

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
