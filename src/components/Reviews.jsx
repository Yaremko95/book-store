import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Comment from "./Comment";
import AddComment from "./AddComment";

class Reviews extends Component {

    constructor(props) {
        super(props);
    }
    state={
        comments:[]
    }
    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews = async() => {
        const {book}= this.props
        try {
            let response = await fetch(`https://striveschool.herokuapp.com/api/comments/${book.asin}`, {
                "method": "GET",
                "headers": {
                    "Authorization": "Basic " + btoa('user27:ZGDWyFCA8umbgpvZ')}

            })
            let comments = await response.json()
            this.setState({
                comments:comments
            })
        }catch (e) {

        }


    }


    render() {
        const {book}=this.props
        const {comments}= this.state
        console.log(comments)
        return (
            <>
                <h3 className={"mt-4"}>{comments.length} Reviews</h3>

                  {comments.map(comment=> (
                      <Comment comment={comment} fetchReviews={this.fetchReviews}/>
                      )
                  )}

                  <AddComment book={book} fetchReviews={this.fetchReviews} />

            </>
        );
    }
}

export default Reviews;