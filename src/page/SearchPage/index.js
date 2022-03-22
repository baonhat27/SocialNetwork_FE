import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchPageComponent from './component'

function SearchPageContainer(props) {
    function useQuery(){
        const {search}=useLocation();
        return new URLSearchParams(search);
    }
    const [choose,setChoose]=useState("all");
    const [listUser,setListUser]=useState([]);
    const query=useQuery();
    useEffect(()=>{
    },[query])
    const chooseListResult=(item)=>{
        setChoose(item.target.id)
    }
    return (
        <div>
            <SearchPageComponent
                searchkey={query.get("keyword")}
                chooseListResult={chooseListResult}
                choose={choose}
            />
        </div>
    )
}

export default SearchPageContainer
