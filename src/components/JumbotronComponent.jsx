import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Jumbotron} from "react-bootstrap";

class JumbotronComponent extends Component {
    render() {

        return (
            <Jumbotron className="jumbotron d-flex align-items-end" fluid style={{}}>
                <Container>
                    <h2 className="text-center ">{this.props.title}</h2>
                </Container>
            </Jumbotron>
        );
    }
}

export default JumbotronComponent;