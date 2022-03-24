import axios from "axios";
import { SERVER } from "../../../shared/store/env";

export async function search(keyword){
    try{
        const result=await axios.get(SERVER+"v1/search?keyword="+keyword,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        });
        return result.data;
    }
    catch(error){
        return [];
    }
}