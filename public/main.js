// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/functions';
import {
  initialPrompt, deliveryJoke, deliveryPunch
} from '../utils/htmlelements';
import getRequest from '../api/promises';

const pulledJoke = getRequest().then();

// async function getJoke() {
//   pulledJoke = await getRequest().then();
// }

// getJoke();
console.warn(pulledJoke);

// const getJoke = getRequest().then((item) => item.setup);

const init = () => {
  // renderToDom('#app', initialPrompt);
  // renderToDom('#app', deliveryJoke(testObj));
  // renderToDom('#app', deliveryPunch(testObj));
  // console.warn(getRequest);
  renderToDom('#app', pulledJoke);
};

init();
