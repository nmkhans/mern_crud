import axios from "axios";

const uploadImage = async (image) => {
    const url = `${process.env.REACT_APP_API_BASEURL}/api/v1/upload-image`;
    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return result.data.imageUrl
}

export default uploadImage