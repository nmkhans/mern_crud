import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import toast from "cogo-toast";
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addProducts } from "../../api/productApi";
import uploadImage from "../../api/imageApi";

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const image = data.image[0];
        const imageUrl = await uploadImage(image);

        const productData = {
            ...data,
            image: imageUrl,
            totalPrice: data.unitPrice * data.quantity
        }

        const response = await addProducts(productData);
        toast.success(response.message);
        reset();
        navigate("/");
    }
    console.log(errors)
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
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required!"
                                }
                            })}
                        />
                        <Form.Text className="text-danger fw-semibold fs-6">
                            {errors?.name?.type === "required" && errors?.name?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productCode">
                        <Form.Label>Product Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product code"
                            {...register("code", {
                                required: {
                                    value: true,
                                    message: "Code is required!"
                                }
                            })}
                        />
                        <Form.Text className="text-danger fw-semibold fs-6">
                            {errors?.code?.type === "required" && errors?.code?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productImage">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            type="file"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required!"
                                }
                            })}
                        />
                        <Form.Text className="text-danger fw-semibold fs-6">
                            {errors?.image?.type === "required" && errors?.image?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product price"
                            {...register("unitPrice", {
                                required: {
                                    value: true,
                                    message: "Price is required!"
                                },
                                min: {
                                    value: 100,
                                    message: "Price has to be more than 100!"
                                }
                            })}
                        />
                        <Form.Text className="text-danger fw-semibold fs-6">
                            {errors?.unitPrice?.type === "required" && errors?.unitPrice?.message}
                            {errors?.unitPrice?.type === "min" && errors?.unitPrice?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productQuantity">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter product Quantity"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is required"
                                },
                                min: {
                                    value: 5,
                                    message: "Quantity has to be more than 5!"
                                }
                            })}
                        />
                        <Form.Text className="text-danger fw-semibold fs-6">
                            {errors?.quantity?.type === "required" && errors?.quantity?.message}
                            {errors?.quantity?.type === "min" && errors?.quantity?.message}
                        </Form.Text>
                    </Form.Group>

                    <Button className="w-100 mt-4" variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProducts;