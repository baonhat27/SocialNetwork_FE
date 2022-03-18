import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAvatar } from '../../shared/store/redux/actions';
import UpdateAvatarFormComponent from './component'
import { saveAvatar } from './service'

function UpdateAvatarFormContainer(props) {
    const dispatch=useDispatch();
    const saveImage=async (imageLink)=>{
        const checkSuccess= await saveAvatar(imageLink);
        if(checkSuccess){
            dispatch(handleAvatar(imageLink[imageLink.length-1]));
            alert('Thay đổi avatar thành công');
        }
        else{
            alert('Có lỗi xảy ra, vui lòng thử lại sau');
        }
    }
    return (
        <div>
            <UpdateAvatarFormComponent saveImage={saveImage} 
            setSelectedAvatarForm={props.setSelectedAvatarForm} 
            avatar={props.avatar}
            selectedAvatarForm={props.selectedAvatarForm}/>
        </div>
    )
}

export default UpdateAvatarFormContainer
