import React, { useState } from 'react'
import ImageShowComponent from './component'

function ImageShowContainer(props) {
    const [index,setIndex]=useState(0);
    const congIndex = () => {
        setIndex(index + 1);
      };
      const truIndex = () => {
        setIndex(index - 1);
      };
    return (
        <div>
            <ImageShowComponent index={index} congIndex={congIndex} truIndex={truIndex} listImage={props.listImage} setImageShow={props.setImageShow}/>
        </div>
    )
}

export default ImageShowContainer