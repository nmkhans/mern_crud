import React from 'react';
import Button from "react-bootstrap/Button"

const ProductRow = ({ product }) => {
    const { _id, name, code, quantity, unitPrice } = product;

    return (
        <tr>
            <td>{_id}</td>
            <td>{code}</td>
            <td>{name}</td>
            <td>{unitPrice}</td>
            <td>{quantity}</td>
            <td>
                <span>
                    <Button variant="warning text-white">edit</Button>
                </span>
                <span className="ms-3">
                    <Button variant="danger">delete</Button>
                </span>
            </td>
        </tr>
    );
};

export default ProductRow;