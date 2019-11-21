import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import WarningSign from '../Components/Warningsign';
import BookList from '../Components/BookList';
import MyBadge from '../Components/MyBadge';
import SingleBook from '../Components/SingleBook';
import FilterBookList from '../Components/FilterBookList';
import Book from '../Book/BooksFantasy.json'

class MainComponent extends Component {
    state = {book: this.randomBook()};
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                book: this.randomBook()
            });
        }, 3000);
    }

    randomBook() {
        const random = Math.floor((Math.random() * Book.length));
        return Book[random];
    }
    render() {
        return (
            <Container>
                <WarningSign text="This is the Error"></WarningSign>
                <div>
                    <MyBadge />
                </div>
                <Row>
                    <Col className="col-3"></Col>
                    <SingleBook colWidth="col-6 mt-3" img={this.state.book.img} title={this.state.book.title} price={this.state.book.price} />
                    <Col className="col-3"></Col>
                </Row>
                <FilterBookList />
            </Container>
        );
    }
}

export default MainComponent;