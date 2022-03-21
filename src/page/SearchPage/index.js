import React from 'react'
import { useSelector } from 'react-redux'
import SearchPageComponent from './component'

function SearchPageContainer(props) {
    const searchkey=useSelector(state=>state.searchkey);
    return (
        <div>
            <SearchPageComponent
                searchkey={searchkey}
            />
        </div>
    )
}

export default SearchPageContainer
