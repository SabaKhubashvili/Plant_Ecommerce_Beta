import axios from "axios";
import { useQuery } from "react-query";


export default function getProductById(productId:string){
    return useQuery(['product', productId], async () => {
        const { data } = await axios.post('/api/product/getById', { productId },);
        return data;
      },{ enabled: !!productId });
}