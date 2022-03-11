import React from 'react';
import './Search.css'
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
    return (
    <>
        <input
            placeholder='Tìm kiếm...'
            className='inputSearch'
        />
        <i className="fa-solid fa-magnifying-glass iconSearch" ></i>

    </>
    );
};

export default Search;