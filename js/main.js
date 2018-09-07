document.addEventListener('DOMContentLoaded', () => {

  const newCharacter = document.querySelector('#star-wars-form');
  newCharacter.addEventListener('submit', handleNewCharacter);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleDelete);

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
  let newCharacterContainer = document.createElement('tr');
  newCharacterContainer.classList.add('character');


  // create name
  const name = document.createElement('td');
  name.textContent = form.name.value;

  //create class

  const characterClass = document.createElement('td');
  characterClass.textContent = form.class.value;

  //create forceSensitive

  const force = document.createElement('td');
  force.textContent = form.forceSensitive.value;

  //append to container
  newCharacterContainer.appendChild(name);
  newCharacterContainer.appendChild(characterClass);
  newCharacterContainer.appendChild(force);

  return newCharacterContainer

};

const handleDelete = function(event) {
 // const characters = document.querySelector('#output');
 // characters.textContent = "";

 const characters = document.querySelectorAll('tr.character');
 characters.forEach( (character) => {
   character.remove('tr.character');
 });


};
