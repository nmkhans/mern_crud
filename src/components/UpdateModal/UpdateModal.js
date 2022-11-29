import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getSingleProduct, updateProducts } from '../../api/productApi';
import toast from "cogo-toast";

const UpdateModal = ({ show, onHide, updateId, setResult, setModal }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const prevData = await getSingleProduct(updateId);

        const updatedData = {
            name: data.name ? data.name : prevData.name,
            code: data.code ? data.code : prevData.code,
            unitPrice: data.unitPrice ? data.unitPrice : prevData.unitPrice,
            quantity: data.quantity ? data.quantity : prevData.quantity, 
            updatedDate: Date.now()
        }

        const res = await updateProducts(updatedData, updateId);
        console.log(res)

        setResult(res.success);
        toast.success(res.message);
        reset();
        setModal(false)
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
                            {...register("unitPrice")}
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