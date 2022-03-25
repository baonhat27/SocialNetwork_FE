import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import SearchResultComponent from "./component";

function SearchResultContainer(props) {
  const history = useHistory();
  const [imageShow,setImageShow]=useState(-1);
  const [limitUser,setLimitUser]=useState(5);
  const [limitPost,setLimitPost]=useState(5);
  const [limitComment,setLimitComment]=useState(5);
  const redirectUserProfile = (_id) => {
    history.push("/profile?id=" + _id);
  };
  const redirectPostPage = (_id) => {
    history.push("posts/" + _id);
  };
  return (
    <div>
      <SearchResultComponent
        redirectUserProfile={redirectUserProfile}
        imageShow={imageShow} setImageShow={setImageShow}
        redirectPostPage={redirectPostPage}
        choose={props.choose}
        listUser={props.listUser}
        listPost={props.listPost}
        listComment={props.listComment}
        limitUser={limitUser} setLimitUser={setLimitUser}
        limitPost={limitPost} setLimitPost={setLimitPost}
        limitComment={limitComment} setLimitComment={setLimitComment}
      />
    </div>
  );
}

export default SearchResultContainer;
