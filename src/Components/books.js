//class Book : needs to contain all the code for making a book starting at <li> and be exported into shelf component
//Imports: React.
//Export:Book
//render>return(entire code for book)
//destructure this.props for cleaner code
//Don't need to change bookshelfchanger
//Book needs to access unique author, thumbnail, title
//HAVE TO USE A KEY when using .map
//Look at ListContacts file from lessons
//When a new value is chosen(event) return the updated book and value of the shelf passing them through updateShelf function

import React from 'react';



class Book extends React.Component{

  render(){

    const { books, book, name, updateShelf} = this.props

    return(
      <div>
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event)=> (updateShelf(book, event.target.value))}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>

      </div>

    )
  }
}

export default Book

