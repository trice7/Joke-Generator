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

export {
  initialPrompt, deliveryJoke, deliveryPunch,
};
