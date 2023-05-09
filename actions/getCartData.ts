import axios from "axios";
import { useQuery } from "react-query";


export default function getCartData(){
    return useQuery('cart',async()=>{

        const response = await axios.get('/api/product/getUserCart')
        return response.data
    })
}