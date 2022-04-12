import { incomingCall } from '../store/redux/actions'
import { playIncomingSound, stopIncomingSound } from '../utils/incomingSound'

export default function videoCallHandle(socket, dispatch) {
  socket.on('incoming_call', data => {
    playIncomingSound()
    const { firstName, lastName, avatar, caller_socket_id, caller_user_id, has_video } = JSON.parse(data)
    dispatch(incomingCall({
      isShow: true,
      firstName, 
      lastName, 
      avatar: (avatar  === 'no information') ? 'https://avatarfiles.alphacoders.com/121/121046.jpg' : avatar, 
      caller_socket_id, 
      caller_user_id,
      has_video
    }))
  })

  socket.on('cancel_call', () => {
    console.log('cancel call')
    dispatch(incomingCall({
      isShow: false
    }))
  })
}

