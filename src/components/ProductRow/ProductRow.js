import React from 'react';
import Button from "react-bootstrap/Button"
import { deleteProducts } from '../../api/productApi';
import toast from "cogo-toast";

const ProductRow = ({ product, setResult, setModal, setUpdateId }) => {
    const { _id, name, code, quantity, unitPrice } = product;

    const handleDelete = async (id) => {
        const result = await deleteProducts(id);
        setResult(result.succcess)
        toast.success(result.message)
    }

    const handleUpdate = (id) => {
        setModal(true);
        setUpdateId(id)
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{code}</td>
            <td>{name}</td>
            <td>{unitPrice}</td>
            <td>{quantity}</td>
            <td>
                <span>
                    <Button
                        variant="warning text-white"
                        onClick={() => handleUpdate(_id)}
                    >edit</Button>
                </span>
                <span className="ms-3">
                    <Button
                        variant="danger"
                        onClick={() => handleDelete(_id)}
                    >delete</Button>
                </span>
            </td>
        </tr>
    );
};

export default ProductRow;