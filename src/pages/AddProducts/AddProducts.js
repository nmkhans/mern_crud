import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useForm } from 'react-hook-form';
import { addProducts } from "../../api/productApi";
import uploadImage from "../../api/imageApi";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        const image = data.image[0];
        const imageUrl = await uploadImage(image);

        const productData = {
            ...data,
            image: imageUrl,
            totalPrice: data.unitPrice * data.quantity
        }

        const response = await addProducts(productData);
        console.log(response)
    }

    return (
        <div className="py-5">
            <PageTitle>Add Product</PageTitle>
            <div className="product__form w-50 mx-auto border border-dark p-4 rounded-2 shadow-sm mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product name"
                            {...register("name")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productCode">
                        <Form.Label>Product Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product code"
                            {...register("code")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productImage">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            type="file"
                            {...register("image")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product price"
                            {...register("unitPrice")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productQuantity">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product Quantity"
                            {...register("quantity")}
                        />
                    </Form.Group>

                    <Button className="w-100 mt-4" variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProducts;