import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import SearchPageComponent from './component'
import { search } from './service';

function SearchPageContainer(props) {
    function useQuery(){
        const {search}=useLocation();
        return new URLSearchParams(search);
    }
    const history=useHistory();
    const [choose,setChoose]=useState("all");
    const [listUser,setListUser]=useState([]);
    const query=useQuery();
    useEffect(async ()=>{
            const result=await search(query.get("all")||query.get("user")||query.get("post")||query.get("comment"))
            console.log(result)
    },[query])
    const chooseListResult=(path)=>{
        setChoose(path)
        history.push("/search?"+(path||"all")+"="+(query.get("all")||query.get("user")||query.get("post")||query.get("comment")))
    }
    return (
        <div>
            <SearchPageComponent
                searchkey={query.get("all")||query.get("user")||query.get("post")||query.get("comment")}
                chooseListResult={chooseListResult}
                choose={choose}
            />
        </div>
    )
}

export default SearchPageContainer
