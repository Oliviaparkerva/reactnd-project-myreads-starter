//class Book : needs to contain all the code for making a book starting at <li> and be exported into shelf component
//Imports: React. Export:Book
//render>return(entire code for book)
//Don't need to change bookshelfchanger
//Book needs to access unique author, thumbnail, title
//Look at ListContacts file from lessons
import React from 'react';



class Book extends React.Component{

  state ={
    value:"move"
  }

   render(){
    return(
      <div>
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={(event)=> (this.props.updateShelf(this.props.book, event.target.value))}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>

      </div>

    )
  }
}

export default Book

