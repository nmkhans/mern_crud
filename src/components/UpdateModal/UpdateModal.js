import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateModal = ({ show, onHide, updateId }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center" id="contained-modal-title-vcenter">
                    Update Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="p-5 pt-3" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product name"
                            {...register("name")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product price"
                            {...register("price")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productQuantity">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product quantity"
                            {...register("quantity")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productStock">
                        <Form.Label>Product Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product code"
                            {...register("code")}
                        />
                    </Form.Group>

                    <Button className="w-100 mt-3" variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateModal;