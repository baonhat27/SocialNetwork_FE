import React, { useEffect, useRef } from 'react';
import './style.css'

function VideoItem(props) {
    let { stream, avatar, showVideo = false, myVideo = false } = props
    if (avatar === 'no information') {
        avatar = 'https://avatarfiles.alphacoders.com/121/121046.jpg'
    }
    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = function(e) {
            console.log('load video')
            videoRef.current.play();
        };
    }, [stream])

    return (
        <div className={`video__item ${myVideo ? 'my__video' : ''}`}>
            <img alt='avatar' src={avatar} className={`video__item--avatar ${showVideo ? 'none' : '' }`} />
            <video ref={videoRef} muted={myVideo} autoPlay className={`video__item--avatar ${showVideo ? '' : 'none' }`} />
        </div>
    );
}

export default VideoItem;