
import React from 'react';
import Book from './Books';


class Shelf extends React.Component{

  render(){

		const { books, book, name, updateShelf} = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          	{book.map((book,key) =>
							<Book key={book.id} book={book}key={key} updateShelf={updateShelf} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;