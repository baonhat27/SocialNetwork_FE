import React from 'react'
import withUploadImage from '../../UploadImage';
import styles from "./index.module.css";
import ImageShowContainer from "../../ImageShow";
function ChatBoxComponent(props) {
    return (
        <div className={styles.chatBox}>
            <div className={styles.chatBox_header}>
                <div className={styles.headers_avatarBox}>
                    <img src={props.session.userId.avatar?props.session.userId.avatar:""} className={styles.headers_avatar}/>
                </div>
                <div className={styles.headers_info}>
                    <p className={styles.headers_name}>
                        {
                            props.session.userId.firstName+" "+props.session.userId.lastName
                        }
                    </p>
                    <p className={styles.headers_timeActive}>
                        Hoạt động 1h trước
                    </p>
                </div>
            </div>
            <div className={styles.chatBox_body}>
                {
                    props.messageList.map((message,index)=>{
                        return <div key={index} className={message.user._id!=localStorage.getItem("userId")?styles.messageShow:styles.messageShow+" "+styles.me}>
                                <div className={message.user._id!=localStorage.getItem("userId")?styles.messageShow_avatarBox:styles.messageShow_avatarBox+" "+styles.me}>
                                    <img className={styles.messageShow_avatar} src={message.user.avatar}/>
                                </div>
                                <div className={message.user._id!=localStorage.getItem("userId")?styles.messageShow_content:styles.messageShow_content+" "+styles.me}>
                                    <div className={message.user._id!=localStorage.getItem("userId")?styles.message:styles.message+" "+styles.me}>
                                        <div className={message.user._id!=localStorage.getItem("userId")?styles.message_contentBox:styles.message_contentBox+" "+styles.me}>
                                            <p className={styles.message_content}>
                                                {
                                                    message.content
                                                }
                                            </p>
                                        </div>
                                        {
                                            message.image.length>0? <div className={message.user._id!=localStorage.getItem("userId")?styles.message_imageList:styles.message_imageList+" "+styles.me} onClick={
                                                function(){
                                                    props.setImageShow(1);
                                                }
                                            }>
                                                {
                                                    message.image.map((image,index)=>{
                                                        if(message.image.length==1){
                                                            return <img key={index} className={styles.message_image} src={image}/>
                                                        }
                                                        else if(message.image.length==2){
                                                            return <img key={index} className={styles.message_image2} src={image}/>
                                                        }
                                                        else{
                                                            return <img key={index} className={styles.message_image3} src={image}/>
                                                        }
                                                    })
                                                }
                                            </div>:<></>
                                        }
                                        {
                                            props.imageShow!=-1? <ImageShowContainer setImageShow={props.setImageShow} listImage={message.image}/>:<></>
                                        }
                                    </div>
                                </div>
                            </div>
                    })
                }
                    
            </div>
            <div className={styles.chatBox_footer}>
                <i className={"fa-solid fa-image "+styles.icon}
                onClick={props.upload}></i>
                <div className={props.images.length>0?styles.messageInputBox+" "+styles.image:styles.messageInputBox}>
                    <div className={styles.chatBox_footer_imageList}>
                        {
                            props.images.map((image,index)=>{
                                return <div className={styles.chatBox_footer_imageBox}>
                                        <i className={"fa-solid fa-xmark "+styles.iconImage}
                                        onClick={
                                            function(){
                                                props.setImages(props.images.filter((imagess,chiso)=>chiso!=index))
                                            }
                                        }></i>
                                        <img src={image} key={index} className={styles.chatBox_footer_image}/>
                                </div>
                            })
                        }
                    </div>
                    <input onKeyDown={function(e){
                        if(e.key=='Enter'){
                            props.sendMessage(props.images,props.clearImage);
                        }
                    }} value={props.message} className={styles.messageInput} onChange={props.changeMessageInput} placeholder="Nhập tin nhắn">

                    </input>
                </div>
                <i className={"fa-solid fa-paper-plane "+styles.icon} onClick={function(){
                    props.sendMessage(props.images,props.clearImage);
                }}></i>
            </div>
        </div>
    )
}

export default withUploadImage(ChatBoxComponent);
