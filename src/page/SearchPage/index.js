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
    const [choose,setChoose]=useState(window.location.search.split("=")[0].slice(1));
    const [listUser,setListUser]=useState([]);
    const [listPost,setListPost]=useState([]);
    const query=useQuery();
    useEffect(async ()=>{
            const result=await search(query.get("all")||query.get("user")||query.get("post"))
            setListUser(result.data.users.users);
            setListPost(result.data.posts.posts);
    },[window.location.search])
    const chooseListResult=(path)=>{
        setChoose(path)
        history.push("/search?"+(path||"all")+"="+(query.get("all")||query.get("user")||query.get("post")))
    }
    return (
        <div>
            <SearchPageComponent
                listUser={listUser}
                listPost={listPost}

                searchkey={query.get("all")||query.get("user")||query.get("post")||query.get("comment")}
                chooseListResult={chooseListResult}
                choose={choose}
            />
        </div>
    )
}

export default SearchPageContainer
