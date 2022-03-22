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
                    <div className={styles.searchKey}>
                        {props.searchkey}
                    </div>
                    <h2 >
                        Bộ lọc
                    </h2>
                    <ul className={styles.listResultName}>
                        <li className={props.choose=="all"?styles.ResultName+" "+styles.choose:styles.ResultName} id="all"
                            onClick={props.chooseListResult}>
                            <i className={props.choose=="all"?"fa-solid fa-address-card "+styles.icon+" "+styles.choose:"fa-solid fa-address-card "+styles.icon}></i>
                            Tất cả
                        </li>
                        <li className={props.choose=="user"?styles.ResultName+" "+styles.choose:styles.ResultName} id="user"
                            onClick={props.chooseListResult}>
                            <i className={props.choose=="user"?"fa-solid fa-user "+styles.icon+" "+styles.choose:"fa-solid fa-user "+styles.icon}></i>
                            Mọi người
                        </li>
                        <li className={props.choose=="post"?styles.ResultName+" "+styles.choose:styles.ResultName} id="post"
                            onClick={props.chooseListResult}>
                            <i className={props.choose=="post"?"fa-solid fa-rectangle-list "+styles.icon+" "+styles.choose:"fa-solid fa-rectangle-list "+styles.icon}></i>
                            Bài viết
                        </li>
                        <li className={props.choose=="comment"?styles.ResultName+" "+styles.choose:styles.ResultName} name="comment"
                            onClick={props.chooseListResult}>
                            <i className={props.choose=="comment"?"fa-solid fa-comment-dots "+styles.icon+" "+styles.choose:"fa-solid fa-comment-dots "+styles.icon}></i>
                            Comment
                        </li>
                    </ul>
                </div>
                <div className={styles.body_result}></div>
            </div>
        </div>
    )
}

export default SearchPageComponent
