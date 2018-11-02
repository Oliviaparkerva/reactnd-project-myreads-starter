//Search Page
//imports: React; link for back button;booksapi to get list of searchable books(getAll),update books to add them to the main page shelves, search to search through books available to add them to the list,shelf(contains book objects)
//export this page to be used in App.js
//objects:
//Search Page
//imports: React, link,bookapi,shelf(contains book)

import React from 'react';
import{ Link } from 'react-router-dom';



class SearchPage extends React.Component{

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default SearchPage