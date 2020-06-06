import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                   <h1>Book id is: {this.props.match.params.bookId}</h1>
            </div>
        );
    }
}

export default Book;