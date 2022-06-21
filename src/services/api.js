import axios from "axios";

// const BASE_URL = "https://fakestoreapi.com";

// const getCarts = async() => {
//     const respons = await axios.get(`${BASE_URL}/products`)
//     return respons.data
// }
// export {getCarts}


const BASE_URL = "https://fakestoreapi.com";
const getUser = async () => {
    const response = await axios.get(`${BASE_URL}/carts`)
    return response.data;
}

export {getUser}