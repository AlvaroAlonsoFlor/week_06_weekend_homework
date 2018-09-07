document.addEventListener('DOMContentLoaded', () => {

  const newCharacter = document.querySelector('#star-wars-form');
  newCharacter.addEventListener('submit', handleNewCharacter);
});

const handleNewCharacter = function (event) {
  event.preventDefault();
  //create character
  const character = createNewCharacter(event.target);
  console.log(event.target);

  //select element to insert
  list = document.querySelector('#output')

  //append to element
  list.appendChild(character)

  event.target.reset();
};

const createNewCharacter = function (form) {

  //character
  const newCharacterContainer = document.createElement('tr')


  // create name
  const name = document.createElement('th');
  name.textContent = form.name.value;

  //create class

  const characterClass = document.createElement('th');
  characterClass.textContent = form.class.value;

  //create forceSensitive

  const force = document.createElement('th');
  force.textContent = form.forceSensitive.value;

  //append to container
  newCharacterContainer.appendChild(name);
  newCharacterContainer.appendChild(characterClass);
  newCharacterContainer.appendChild(force);

  return newCharacterContainer

};
