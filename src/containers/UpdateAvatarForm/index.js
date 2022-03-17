import React from 'react'
import UpdateAvatarFormComponent from './component'

function UpdateAvatarFormContainer(props) {
    return (
        <div>
            <UpdateAvatarFormComponent setSelectedAvatarForm={props.setSelectedAvatarForm} selectedAvatarForm={props.selectedAvatarForm}/>
        </div>
    )
}

export default UpdateAvatarFormContainer
