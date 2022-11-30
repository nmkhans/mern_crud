import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/productApi';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Spinner } from "react-bootstrap";
import ProductCard from './../../components/ProductCard/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data)
        }
        fetchData()
    }, [])

    if(products.length === 0) {
        return (
            <div className="text-center mt-5">
                <Spinner style={{width: "100px", height: "100px"}} animation="border" size="md" />
            </div>
        )
    }

    return (
        <section className="py-5">
            <Container>
                <CardGroup>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                        {products.map((product) => <ProductCard
                            key={product._id}
                            product={product} />)}
                    </Row>
                </CardGroup>
            </Container>
        </section>
    );
};

export default Home;