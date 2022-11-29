import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/productApi";
import { Container, Card, Button } from "react-bootstrap";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSingleProduct(id);
            setProduct(data);
        }

        fetchData()
    }, [id])

    return (
        <section className="py-5">
            <Container>
                <Card className="w-75 d-flex flex-row align-items-center m-auto">
                    <Card.Img  variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>
                            <h3 className="fw-semibold">{product.name}</h3>
                            <h5 className="fw-semibold pt-1"><sup>$</sup>{product.unitPrice}</h5>
                        </Card.Title>
                        <Card.Text>
                            <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque exercitationem, corporis aut esse dolore minima reiciendis! Provident, itaque nam!</p>
                            <ul>
                                <li>Product Code: {product.code}</li>
                                <li>In Stock: {product.quantity}</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );
};

export default ProductDetail;