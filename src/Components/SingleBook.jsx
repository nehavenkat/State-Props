import React, { Component } from 'react';
import { Col, Row ,Card, CardImg, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";

class SingleBook extends Component {
    render() {
        return (
            <Row>
                <Col className="col-3">
                    <Card>
                        <CardImg className="images" object src={this.props.img} top width="100%" />
                        <CardBody>
                            <CardTitle>{this.props.title}</CardTitle>
                            <CardSubtitle className="price">{this.props.price}€</CardSubtitle>
                            <Button color="danger">Buy now</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    </Row>
            )
        }
    
    }
export default SingleBook;