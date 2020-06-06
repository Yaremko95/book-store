import React, {Component} from 'react';
import booksList from '../data/fantasy.json'
import {Col, Container, Row, Image} from "react-bootstrap";
import Reviews from "../components/Reviews";

class Book extends Component {
    constructor(props) {
        super(props);

    }
    state = {
      book:booksList.find(book => book.asin ==this.props.match.params.bookId )
    }

    render() {
        return (
          <Container className={"mt-5 p-5 "} style={{
              border:"2px solid #EBEFF2"
          }} >
             <Row>
                 <Col lg={4}>
                     <Image src={this.state.book.img} thumbnail style={{height:"30rem", objectFit:"cover"}}/>
                 </Col>
                 <Col lg={8} className={"mt-2"}>
                     <span style={{
                         fontSize:"30px",
                         fontWeight:"bold",
                        }}>{this.state.book.title}</span>
                 </Col>
             </Row>
                <Reviews book={this.state.book}/>
          </Container>
        );
    }
}

export default Book;