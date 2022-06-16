import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getCarts = async() => {
    const respons = await axios.get(`${BASE_URL}/carts`)
    return respons.data
}
export {getCarts}