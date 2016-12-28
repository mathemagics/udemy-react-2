export function selectBook(book) {
  return {
    type: 'BOOL_SELECTED',
    payload: book,
  }
}
