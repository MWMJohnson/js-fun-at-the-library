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

function calculatePageCount(titleName) {
  let titleCount = titleName.length;
  return titleCount * 20;
}

function writeBook(title, mainCharacter, genre) {
  const book = {};

  book.title = title;
  book.mainCharacter = mainCharacter;
  book.pageCount = calculatePageCount(title);
  book.genre = genre;
  return book;
}

function editBook(bookObject) {
  newPageCount = bookObject.pageCount * .75;
  bookObject.pageCount = newPageCount
  return bookObject;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}