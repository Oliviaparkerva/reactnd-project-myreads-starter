//Main Page
//imports: React; link for search button;booksapi to get list of searchable books(getAll),update books to add them to the main page shelves, search to search through books available to add them to the list,shelf(contains book objects)
//export this page to be used in App.js and search.js
//objects:

import React from 'react';
import{ Link } from 'react-router-dom';


class MainPage extends React.Component{


  render(){
    return(
      <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf />
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
      </div>

    );
  }
}

export default MainPage