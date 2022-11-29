import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, code, image, quantity, unitPrice } = product;

    const handleNavigate = (id) => {
        navigate(`/product-detail/${id}`)
    }

    return (
        <Col>
            <Card>
                <Card.Img className="max-w-full" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Code: {code}</ListGroup.Item>
                            <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
                            <ListGroup.Item>Price: {unitPrice}</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => handleNavigate(_id)} className="w-100">See Detail</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProductCard;