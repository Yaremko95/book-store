import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail} from "react-icons/all";


class Footer extends Component {

    render() {

        return (
            <Container className="footer" fluid style={{backgroundColor: "black"}}>
                <Container>
                    <Row className="row-cols-1 row-cols-lg-2 my-4 justify-content-center">
                            <Col>
                                <ul>
                                    <li className="pb-2"><a href="#">About</a></li>
                                    <li className="pb-2"><a href="#">Contact</a></li>
                                    <li className="pb-2"><a href="#">Terms of use</a></li>
                                    <li className="pb-2"><a href="#">Bookshop for authors</a></li>
                                    <li className="pb-2">
                                        <a className="pr-2" href="#"><AiOutlineMail /></a>
                                        <a className="pr-2" href={"#"}><AiOutlineFacebook /></a>
                                        <a className="pr-2" href={"#"}><AiOutlineInstagram /></a>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="d-flex logo align-items-center justify-content-center">
                                <Image src="https://bookshop.org/assets/logo_light-5ee7aa72371f35f501fecadca6928236cc338ecf95039046c70d1adea5f72d82.svg" />
                                <span className="ml-2">BOOK STORE</span>
                            </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Footer;