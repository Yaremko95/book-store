import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import bookList from "../data/fantasy.json";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Comment from "./Comment";

class LatestRelease extends Component {
    constructor(props) {
        super(props);

    }
    state= {
        books:bookList,
        selectedBook: null,
        comments: [],
        showComments: false
    }
    handleComments = async (book) => {
        let response = await fetch(`https://striveschool.herokuapp.com/api/comments/${book.asin}`, {
            "method": "GET",
            "headers": {
                "Authorization": "Basic " + btoa('user27:ZGDWyFCA8umbgpvZ')}

        })
        let comments = await response.json()

        this.setState({
            selectedBook:book,
            comments:comments,
            showComments:true
        })


    }
    render() {
        console.log(this.state.books)
        return (

           <Container fluid >
               <h2 className="text-center">Lates Release</h2>
               <Row>

                   <Col lg={8}>
                       <Row className="row-cols-1 row-cols-md-3 row-cols-lg-5">
                           {this.state.books.slice(0,15).map(book => {
                               return (
                                   <Col  className="mb-3" key={book.asin}>
                                       <Image src={book.img} thumbnail  style={{height:"18rem", objectFit: "cover"}} onClick={()=>this.handleComments(book)}/>
                                       <div className="w-100 d-flex justify-content-center " >
                                           <span style={{color: "#9e866b"}} className="text-center">{book.title}</span>
                                       </div>
                                   </Col>
                               )
                             })
                           }
                       </Row>
                   </Col>
                   <Col lg={4}>
                       {this.state.showComments && <Comment book={this.state.selectedBook} comments={this.state.comments}/> }
                   </Col>
               </Row>






           </Container>
        );
    }
}

export default LatestRelease;