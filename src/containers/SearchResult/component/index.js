import React from "react";
import ImageShowContainer from "../../ImageShow";
import styles from "./index.module.css";
function SearchResultComponent(props) {
  return (
    <div className={styles.searchResult}>
      <div
        className={
          props.choose == "all" || props.choose == "user"
            ? styles.resultBox
            : styles.hidden
        }
      >
        <h1 className={styles.heading}>Mọi người</h1>
        <div className={styles.listResult}>
          {props.listUser.length > 0 ? (
            props.listUser.map((user, index) => {
              return (
                <div
                  className={
                    index != props.listUser.length - 1
                      ? styles.element + " " + styles.line
                      : styles.element
                  }
                >
                  <div className={styles.element_imageBox}>
                    <img src={user.avatar} className={styles.element_image} />
                  </div>
                  <div className={styles.element_info}>
                    <h3
                      className={styles.element_name}
                      onClick={function () {
                        props.redirectUserProfile(user._id);
                      }}
                    >
                      {user.firstName + " " + user.lastName}
                    </h3>
                    <p className={styles.element_email}>
                      <i className="fa-solid fa-envelope"></i> {user.email}
                    </p>
                    <p className={styles.element_gender}>
                      <i className="fa-solid fa-mars-and-venus"></i>{" "}
                      {user.gender ? "Nữ" : "Nam"}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <>Không tìm thấy người dùng nào</>
          )}
          {props.listUser.length == 6 ? (
            <div className={styles.displayMore}>Xem thêm</div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className={
          props.choose == "all" || props.choose == "post"
            ? styles.resultBox
            : styles.hidden
        }
      >
        <h2>Bài viết</h2>
        <div className={styles.postList}>
          {props.listPost.map((post,index) => {
            return (
              <div className={styles.post}>
                <div className={styles.postHeader}>
                  <div
                    style={{
                      position: "relative",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <div className={styles.post_avatarBox}>
                      <img
                        className={styles.post_avatar}
                        src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.18169-9/18199291_267826820293033_5647185925349651998_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ik1bpCjkC70AX88K-r3&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8w6H9W2dX0bL9FGoUz-qlkI6ykuRE_lhTJNSdBuzzO8g&oe=626314BB"
                      />
                    </div>
                    <div className={styles.post_userStatus}></div>
                  </div>
                  <div className={styles.post_headerInfo}>
                    <h3 className={styles.post_header_username}>
                      Nguyen trung hieu
                    </h3>
                    <p className={styles.post_header_time}>
                      29 tháng 4, 2017 ·{" "}
                    </p>
                  </div>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.postBody_content}>{post.content}</div>
                  <div className={styles.postBody_listImage} onClick={function(){
                      props.setImageShow(index);
                  }}>
                    {post.images.length == 1 ? (
                      <div className={styles.Image}>
                        <img
                          className={styles.oneImage_image}
                          src={post.images[0]}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {post.images.length == 2 ? (
                      <div className={styles.Image}>
                        <img
                          className={styles.twoImage_image}
                          src={post.images[0]}
                        />
                        <img
                          className={styles.twoImage_image}
                          src={post.images[1]}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {post.images.length >= 3 ? (
                      <div className={styles.Image}>
                        <div className={styles.threeImage_box1}>
                          <img
                            className={styles.threeImage_image}
                            src={post.images[0]}
                          />
                        </div>
                        <div className={styles.threeImage_box2}>
                          <img
                            className={styles.threeImage_image2}
                            src={post.images[1]}
                          />
                          <div style={{ position: "relative" }}>
                            <img
                              className={styles.threeImage_image2}
                              src={post.images[2]}
                            />
                            <div
                              className={
                                post.images.length > 3
                                  ? styles.threeImage_image2_glass
                                  : ""
                              }
                            >
                              <span className={styles.post_imagecountMore}>
                                +{post.images.length - 3}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className={styles.post_footer}>
                    <span
                      className={styles.post_showMore}
                      onClick={() => {
                        props.redirectPostPage(post._id);
                      }}
                    >
                      Hiển thị chi tiết
                    </span>
                  </div>
                </div>
                {
                    props.imageShow==index?<ImageShowContainer/>:<>hello</>
                }
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          props.choose == "all" || props.choose == "comment"
            ? styles.resultBox
            : styles.hidden
        }
      >
        <h2>Bình luận</h2>
      </div>
    </div>
  );
}

export default SearchResultComponent;
