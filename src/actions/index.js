
export function selectBook(book) {
  // this is an actionCreator. Needs to return an action -- an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}