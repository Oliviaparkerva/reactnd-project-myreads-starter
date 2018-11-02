import React from 'react';
import Book from './Books';


class Shelf extends React.Component{

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf