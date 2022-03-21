import React from 'react';
import styles from  './Search.module.css'

const Search = (props) => {
    return (
    <div className={props.searchShow?styles.search+" "+styles.show:styles.search}>
        <input
            placeholder='Tìm kiếm...'
            className={props.searchShow?styles.inputSearch+" "+styles.show:styles.inputSearch}
        />
        <i onClick={function(){
            props.setSearchShow(props.searchShow?false:true);
        }} className={props.searchShow?"fa-solid fa-magnifying-glass "+styles.iconSearch+" "+styles.show:"fa-solid fa-magnifying-glass "+styles.iconSearch} ></i>

    </div>
    );
};

export default Search;