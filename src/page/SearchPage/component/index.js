import React from 'react'
import Header from '../../../containers/Header';
import styles from "./index.module.css";
function SearchPageComponent(props) {
    return (
        <div className={styles.searchPage}>
            <Header/>
            <div className={styles.body}>
                <div className={styles.body_searchList}>
                    <h1 className={styles.searchList_heading}>
                        Kết quả tìm kiếm cho
                    </h1>
                    <span>
                        {props.searchkey}
                    </span>
                </div>
                <div className={styles.body_result}></div>
            </div>
        </div>
    )
}

export default SearchPageComponent
