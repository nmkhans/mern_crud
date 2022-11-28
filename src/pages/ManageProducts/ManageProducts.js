import React, { useState, useEffect } from 'react';
import { Container, Table } from "react-bootstrap";
import { getProducts } from '../../api/productApi';
import ProductRow from '../../components/ProductRow/ProductRow';
import PageTitle from './../../components/PageTitle/PageTitle';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productData = await getProducts();
            setProducts(productData)
        };

        fetchData();
    }, [])

    return (
        <section className="py-5">
            <PageTitle>Manage Product</PageTitle>
            <Container className="mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product code</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => <ProductRow 
                        product={product} />)}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default ManageProducts;