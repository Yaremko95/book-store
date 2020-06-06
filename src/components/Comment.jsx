import React, {Component} from 'react';
import Rating from "react-rating";
import {FaRegStar, FaStar} from "react-icons/fa";
import TimeAgo from "react-timeago/lib";

class Comment extends Component {


    render() {
        const {comment} = this.props
        return (
            <div className={"d-flex flex-column"}>
                <span>{comment.author}</span>
                <Rating
                    initialRating={comment.rate}
                    fullSymbol={<FaStar color={"orange"} />}
                    emptySymbol={<FaRegStar color={"orange"} />}
                />
                <span>{comment.comment}</span>
                <TimeAgo date={comment.createdAt} />
            </div>
        );
    }
}

export default Comment;