import axios from "axios";

const getProducts = async () => {
    const url = `${process.env.REACT_APP_API_BASEURL}/api/v1/get-products`;
    const res = await axios.get(url);
    const data = await res.data.data;

    return data;
}

const addProducts = async (body) => {
    const url = `${process.env.REACT_APP_API_BASEURL}/api/v1/add-product`;
    const res = await axios.post(url, body);
    const data = await res.data;
    
    return data
}

const updateProducts = async (body, id) => {
    const url = `${process.env.REACT_APP_API_BASEURL}/api/v1/update-product/${id}`;
    const res = await axios.put(url, body);
    console.log(res)

}

const deleteProducts = async (id) => {
    const url = `${process.env.REACT_APP_API_BASEURL}/api/v1/delete-product/${id}`;
    const res = await axios.delete(url);
    const data = res.data;

    return data
}

export {
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts
}