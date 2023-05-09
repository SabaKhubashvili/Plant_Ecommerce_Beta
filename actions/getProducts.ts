import axios from "axios";
import { useQuery } from "react-query";

export default function getProducts(){
    return useQuery('products',async() => {
        const response = await axios.get('api/product/getAll')
        return response.data
    })
}