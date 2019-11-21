import React, { Component } from 'react';
import { Col, Row ,Card, CardImg, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";

class SingleBook extends Component {
    render() {
        return (
            <Col className={this.props.colWidth}>
                <Card id={this.props.id}>
                    <CardImg className="images" object src={this.props.img} top width="100%" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <div className="price-box">
                            <div className="price">{this.props.price}€</div>
                            <div><Button color="danger">Buy now</Button></div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            )
        }
    
    }
export default SingleBook;