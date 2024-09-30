function createTitle(titleName) {
  return "The " + titleName;
}

function buildMainCharacter(nameInput, ageInput, pronounsInput) {
  character = {};
  character.name = nameInput;
  character.age = ageInput;
  character.pronouns = pronounsInput;
  return character;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}