import axios from "axios";
import { useQuery } from "react-query";


export default function(productId:string){
    return useQuery(['productId',productId],async()=>{
        const response = await axios.post('/api/product/isInCart',{"productId":productId})
        return response.data
    },{enabled:!!productId})
}