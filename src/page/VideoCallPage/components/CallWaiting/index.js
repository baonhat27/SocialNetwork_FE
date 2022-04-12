import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import './style.css'

function CallWaiting(props) {
    const { search } = useLocation()
    const { caller_socket_id } = queryString.parse(search)

    let { avatar, name, status} = props
    if (avatar === 'no information') {
        avatar = 'https://avatarfiles.alphacoders.com/121/121046.jpg'
    }
    let statusDesciption = status === 'WAITING' ? 'Đang gọi...' : 'Không trả lời' 
    if (caller_socket_id) {
        statusDesciption = 'Đang kết nối...'
    }
    if (status === 'ENDED')
        statusDesciption = 'Cuộc gọi đã kết thúc'
    return (
        <div className='call__waiting'>
            <div className='call__waiting--avatar'>
                <img src={ avatar } alt=''/>
            </div>
            <h2 className='call__waiting--name'> { name } </h2>
            <p> { statusDesciption } </p>
        </div> 
    );
}

export default CallWaiting;