
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
          	{books.map((book) =>
							<Book key={book.id} book={book} updateShelf={updateShelf} />
            )} 
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf