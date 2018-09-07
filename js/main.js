document.addEventListener('DOMContentLoaded', () => {
  console.log('listener working');

  const newCharacter = document.querySelector('#starWarsForm');
  newCharacter.addEventListener('submit', handleNewCharacter);
});

const handleNewCharacter = function (event) {
  event.preventDefault();
  console.log('button pressed');
};
