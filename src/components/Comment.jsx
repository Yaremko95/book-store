import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import AddComment from "./AddComment";

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        comments: this.props.comments,
        book:this.props.book
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
            <Image src={this.props.book.img} thumbnail  style={{width:"10rem", objectFit: "cover"}} />
            <div className="w-100 d-flex justify-content-center" >
                <span style={{color: "#9e866b"}} className="text-center">{this.props.book.title}</span>
            </div>
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                        {this.state.comments.map(comment => <ListGroup.Item>{comment.comment}</ListGroup.Item>)}
                    </ListGroup>
                    <AddComment asin={this.state.book.asin}/>
                </div>
            </div>
        );
    }
}

export default Comment;