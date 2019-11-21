import React from 'react';
import {Container, Row, Col, Input } from "reactstrap";
import SingleBook from './SingleBook';
import Book from '../Book/BooksFantasy.json'


class FilterBookList extends React.Component {
    state = {
        searchString: ""
    }
    searchChange = (e) => {
        this.setState({
            searchString: e.target.value
        });
    }
    render() {
        let bookList = Book.filter((book)=>{
            return book.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) >= 0;
        }).map(B => {
            return(<SingleBook colWidth="col-4" img={B.img} title={B.title} price={B.price} id={B.asin} />)
        });
        return (
            <Container className="mt-2">
                <Row>
                    <Input type="text" placeholder="Search book" onChange={this.searchChange} value={this.state.searchString} />
                </Row>
                <Row className="mt-4">
                {bookList}
                </Row>
            </Container>
        );
    }
}

export default FilterBookList;