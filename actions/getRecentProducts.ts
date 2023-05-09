import axios from "axios";
import { useQuery } from "react-query";




export default function getRecentProducts(){
    return useQuery('products',async()=>{
        const response = await axios.get('/api/product/getRecentPlants')
        return response.data
    })
}