//Main Page
//imports: React; link for search button;booksapi to get list of searchable books(getAll),update books to add them to the main page shelves, search to search through books available to add them to the list,shelf(contains book objects)
//export this page to be used in App.js and search.js
//componentDidMount go through all the books available using getAll method
//react constructor method and super https://is.gd/4KzZvb or UDACITY lesson on setting state with newly proposed method https://is.gd/4KzZvb

import React from 'react';
import{ Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelves';



class MainPage extends React.Component{

  state = {
  	books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then(books => {
      this.setState({books})
    })
  }

  updateShelf = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(books => {
          book.shelf = shelf;
          this.setState(state =>({
          books: state.books.filter(b =>b.id !== book.id).concat(book)
          }))
      })
  }


  render(){
    return(
      <div>
          <div  className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf updateShelf={this.updateShelf} name="Current Reads" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
              <Shelf updateShelf={this.updateShelf} name="Want to Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
              <Shelf updateShelf={this.updateShelf} name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    )
  }
}

export default MainPage;