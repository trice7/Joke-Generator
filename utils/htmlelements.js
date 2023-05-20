const initialPrompt = `
<p class = 'cardText'>Welcome to the joke generator.</p>
<button class= 'main-btn'>Press to start laughing!</button>
`;

function deliveryJoke(obj) {
  return `
<p class='cardText'>${obj.setup}</p>
<button class='main-btn'>???</button>
`;
}

function deliveryPunch(obj) {
  return `
<p class='cardText'>${obj.setup}</p>
<p class='cardText'>${obj.delivery}</p>
<button class='main-btn'>😆😆 Want another joke? 😆😆</button>
`;
}

export {
  initialPrompt, deliveryJoke, deliveryPunch
};
