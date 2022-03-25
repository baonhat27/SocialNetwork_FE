import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import SearchResultComponent from "./component";

function SearchResultContainer(props) {
  const history = useHistory();
  const [imageShow,setImageShow]=useState(-1);
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
      />
    </div>
  );
}

export default SearchResultContainer;
