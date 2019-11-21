import React, { Component } from 'react';
import SingleBook from '../Components/SingleBook';
import Book from '../Book/BooksFantasy.json';

class BookList extends Component {
    
    render() {
    let bookList = Book.map(B =>
        {
            return(<SingleBook img={B.img} title={B.title} price={B.price}/>)
        }) 
        return (
            <div>
            {bookList}    
            </div>
        );
    }
}

export default BookList;