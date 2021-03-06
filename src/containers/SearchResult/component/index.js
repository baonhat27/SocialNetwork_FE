import React from "react";
import ImageShowContainer from "../../ImageShow";
import styles from "./index.module.css";
import { timeFromNow } from "../../../shared/utils";

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
            props.listUser.slice(0, props.limitUser).map((user, index) => {
              return (
                <div
                  key={index}
                  className={
                    index != props.limitUser - 1 &&
                    index < props.listUser.length - 1
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
          {props.listUser.length > props.limitUser ? (
            <div
              className={styles.displayMore}
              onClick={() => {
                props.setLimitUser(props.limitUser + 5);
              }}
            >
              Xem thêm
            </div>
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
        style={{ maxHeight: "none" }}
      >
        <h2>Bài viết</h2>
        <div className={styles.postList}>
          {props.listPost.slice(0, props.limitPost).map((post, index) => {
            return (
              <div className={styles.post} key={index}>
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
                        src={post.createdBy.avatar}
                      />
                    </div>
                    <div className={styles.post_userStatus}></div>
                  </div>
                  <div className={styles.post_headerInfo}>
                    <h3
                      style={{ cursor: "pointer" }}
                      className={styles.post_header_username}
                      onClick={function () {
                        props.redirectUserProfile(post.createdBy._id);
                      }}
                    >
                      {post.createdBy.firstName + " " + post.createdBy.lastName}
                    </h3>
                    <p className={styles.post_header_time}>
                      {timeFromNow(post.createdAt) + " "}
                    </p>
                  </div>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.postBody_content}>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                  {post.images.length > 0 && (
                    <div
                      className={styles.postBody_listImage}
                      onClick={function () {
                        props.setImageShow(index);
                      }}
                    >
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
                  )}
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
                {props.imageShow == index ? (
                  <ImageShowContainer
                    setImageShow={props.setImageShow}
                    listImage={post.images}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
          {props.listPost.length > props.limitPost ? (
            <div
              className={styles.displayMore}
              onClick={function () {
                props.setLimitPost(props.limitPost + 5);
              }}
            >
              Xem thêm
            </div>
          ) : (
            <></>
          )}
          {props.listPost.length == 0 ? "Không tìm thấy bài viết nào" : ""}
        </div>
      </div>
    </div>
  );
}

export default SearchResultComponent;
