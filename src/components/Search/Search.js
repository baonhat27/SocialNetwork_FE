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
        <SearchOutlined
            className='iconSearch'
        />

    </>
    );
};

export default Search;