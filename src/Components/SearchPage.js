import React from 'react';
import{ Link } from 'react-router-dom';
import Book from './Books';
import * as BooksAPI from '../BooksAPI';
import MainPage from './MainPage';
import Shelf from './Shelves';

class SearchPage extends React.Component{

  state={
      query:'',
      queryResults:[],
      shelf:''
  }
  updateQuery = (query) =>{
    this.setState({ query })
    this.showResults(query)
  }

  showResults= (query) => {
    if(query){
      BooksAPI.search(query)
      .then((queryResults) =>{
        if(queryResults.error){
          this.setState({queryResults:[]})
        }else{
          this.setState({queryResults})
        }
      })
    }else{
      this.setState({queryResults:[]})
    }
  }


render() {

console.log('se3archProps')
return (
  <div className="search-books">
    <div className="search-books-bar">
    <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={(event) =>  this.updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {this.state.queryResults.map((book) =>
			<li>
          <Book
              updateShelf={this.props.updateShelf}
              book={book}
              />
			</li>
        )}
      </ol>
    </div>
  </div>
  );
  }
}

export default SearchPage;