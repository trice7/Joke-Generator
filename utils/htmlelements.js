const initialPrompt = `
<p id='init-page' class = 'cardText'>Welcome to the joke generator.</p>
`;

function deliveryJoke(obj) {
  return `
<p id='joke-page' class='cardText'>${obj[0].setup}</p>
`;
}

function deliveryPunch(obj) {
  return `
<p id='punch-page' class='cardText'>${obj[0].setup}</p>
<p class='cardText'>${obj[0].delivery}</p>
`;
}

const htmlContainer = `
<div id='joke-container'></div>
<div id='punch-container'></div>
`;

export {
  initialPrompt, deliveryJoke, deliveryPunch, htmlContainer
};

// {/* <button id='start-btn' class='main-btn'>Press to start laughing!</button>
// <button type='submit' id='joke-btn' class='main-btn'>???</button>
// <button class='main-btn'>😆😆 Want another joke? 😆😆</button> */}
