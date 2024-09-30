function createTitle(titleName) {
  let title = "The " + titleName;
  return title;
}

function buildMainCharacter(nameInput, ageInput, pronounsInput) {
  let character = {};
  character.name = nameInput;
  character.age = ageInput;
  character.pronouns = pronounsInput;
  return character;
}

function saveReview(review, reviews) {
  reviews.push(review); // Add new review
  let uniqReviews = [... new Set(reviews)]; // Create array with unique values
  reviews.length = 0; // Clear the array
  reviews.push(...uniqReviews); // Add the unique reviews back

  return reviews;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}