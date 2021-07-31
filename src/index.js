const messages = [
  'Anna',
  'Nikolai',
  'Diego',
  'Laura',
  'Carolina',
  'Lily'
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };
