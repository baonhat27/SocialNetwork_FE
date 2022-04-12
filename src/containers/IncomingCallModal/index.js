import { PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Peer from "peerjs";
import { useDispatch, useSelector } from "react-redux";
import { incomingCall } from "../../shared/store/redux/actions";
import { stopIncomingSound } from "../../shared/utils/incomingSound";
import './style.css'

function IncomingCallModal(props) {
    const socket = useSelector(state => state.io)
    const dispatch = useDispatch()
    const { firstName, lastName, avatar, caller_socket_id, caller_user_id, has_video } = props
    const handleReject = () => {
        socket.emit('call_response', JSON.stringify({
            status: 'REJECT',
            caller_socket_id
        }))
        dispatch(incomingCall({
            isShow: false
        }))

        stopIncomingSound()
    }

    const handleApprove = () => {
        dispatch(incomingCall({
            isShow: false
        }))

        const popup = window.open(
                `/call?user_to_ring=${localStorage.getItem('userId') || ''}&has_video=${has_video}&caller_socket_id=${caller_socket_id}&caller_user_id=${caller_user_id}`,
                '_blank',
                `height=${window.screen.height},width=${window.screen.width}`
            )

        popup.addEventListener('beforeunload', function() {
            console.log('cancel cuoc goi den')
            socket.emit('end_call', caller_socket_id)
        })

        stopIncomingSound()
    }

    return (
        <div className="incoming__call">
            <div className="overlay"></div>
            <div className="incoming__call--menu">
                <div className="incoming__call--title">
                    <h1>Cuộc gọi video đến</h1>
                    <span className="incoming__call--menu__close" onClick={handleReject} >&#x2715;</span>
                </div>

                <div className="incoming__call--content">
                    <div className="caller__avatar">
                        <img alt="" src={avatar} />
                    </div>
                    <div>
                        <h2>
                            { firstName + lastName } đang gọi cho bạn 
                        </h2>
                        <p>
                            Cuộc gọi sẽ bắt đầu ngay khi bạn trả lời
                        </p>
                    </div>
                </div>
                <div className="incoming__call--button">
                    <Button type="default" shape="round" size="large" onClick={handleReject} > Từ chối </Button>
                    <Button icon={<PhoneOutlined />} style={{
                        marginLeft: '10px'
                    }} type="primary" shape="round" size="large" onClick={() => handleApprove(caller_socket_id)}> Chấp nhận </Button>
                </div>
            </div>
        </div>
    );
}

export default IncomingCallModal;