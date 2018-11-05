import React from 'react';
import{ Link } from 'react-router-dom';
import Book from './Books';
import * as BooksAPI from '../BooksAPI';

class SearchPage extends React.Component{

  state={
      query:'',
      queryResults:[]
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
          this.setState({queryResults:[]});
        }else{
          this.setState({queryResults})
        }
      })
    }else{
      this.setState({queryResults:[]})
    }
  }


render() {

const { books, book, name, updateShelf} = this.props

return (
  <div className="search-books">
    <div className="search-books-bar">
    <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {
      this.state.queryResults.map((book => <Book updateShelf={updateShelf} book={book} key={book.id}/>))
      }
      </ol>
    </div>
  </div>
  );
  }
}

export default SearchPage;