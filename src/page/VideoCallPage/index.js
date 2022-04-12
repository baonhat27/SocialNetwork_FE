import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import Peer from 'peerjs';
import CallOption from './components/CallOption';
import 'boxicons';
import './index.css'
import VideoGrid from './components/VideoGrid';
import { getStream } from './utils';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CallWaiting from './components/CallWaiting';

function VideoCallPage(props) {
  const { search } = useLocation()
  const { user_to_ring, has_video, caller_socket_id, caller_user_id } = queryString.parse(search)
  
  const socket = useSelector(state => state.io)
  const [myStream, setMyStream] = useState(null)
  const [friendConnection, setFriendConnection] = useState(null)
  const [friendStream, setFriendStream] = useState(null)
  const [callInfo, setCallInfo] = useState({})
  const [friendCamStatus, setFriendCamStatus] = useState(false)
  const [callStatus, setCallStatus] = useState('WAITING')
  const [options, setOptions] = useState({
    video: JSON.parse(has_video),
    microphone: true,
    turnOff: false
  })

  useEffect(() => {
    
    if (!myStream)
        return

    const user_id = localStorage.getItem('userId')
    // socket.emit('verify', localStorage.getItem('token') || '')
    socket.emit('call_info', user_to_ring === user_id ? caller_user_id : user_to_ring)
    socket.on('call_info', data => {
      console.log('fetch info user', data)
      setCallInfo(JSON.parse(data))
    })
    socket.on('toggle_cam', status => {
      console.log('toogele cam', status)
      setFriendCamStatus(status)
    })

    socket.on('start_peer', () => {
      console.log('connect', socket.id)
      if (user_to_ring  !== user_id) {
        console.log('peer id init: ', socket.id)
        const peer = new Peer(socket.id)
  
        peer.on('open', (id) => {
          console.log('peer id init: ', id, socket.id)
  
        })
        socket.emit('call', JSON.stringify({user_to_ring, has_video}))
        socket.on('call_response', data => {
          console.log('partner rep: ', data)
          const { status, user_accept_socket_id } = JSON.parse(data)
          if (status === 'APPROVE') {
            const options = {
              'constraints': {
                'mandatory': {
                  'OfferToReceiveAudio': true,
                  'OfferToReceiveVideo': true
                },
                offerToReceiveAudio: 1,
                offerToReceiveVideo: 1,
              }
            }
            const call = peer.call(user_accept_socket_id, myStream, options)
            console.log('peer id caller: ', call);
            call.on('stream', stream => {
              setCallStatus('CALLING')
              setFriendStream(stream)
              console.log('stream nhan', stream.getVideoTracks())
              if (stream.getVideoTracks().length)
                setFriendCamStatus(true)
            })
  
            setFriendConnection(call)
            window.opener.registerCancelCall(call.peer)
          }
          else {
            console.log('reject r')
            setCallStatus('REJECT')
          }
        })
      }
      else { // receiver
        const peer = new Peer(socket.id)
        peer.on('open', (id) => {
          socket.emit('call_response', JSON.stringify({
            status: 'APPROVE',
            caller_socket_id
          }))
          console.log('peer id init: ', id)
        });
  
        peer.on('call', call => {
          console.log('co nguoi goi den', call)
          if (call.peer === caller_socket_id) {
            call.answer(myStream)
            call.on('stream', stream => {
              setCallStatus('CALLING')
              setFriendStream(stream)
              if (stream.getVideoTracks().length)
                setFriendCamStatus(true)
            })
            setFriendConnection(call)
          }
        })
      }
    })
    
  }, [myStream])

  const handleVideo = async status => {
    if (status) {
      if (!myStream) {
        const stream = await getStream({
          video: options.video,
          audio: options.microphone
        })

        setMyStream(stream)
      } else {
        const stream = await getStream({
          video: options.video
        })
        
        myStream.addTrack(stream.getVideoTracks()[0])
      }

      friendConnection.peerConnection.getSenders().forEach(sender => {
        console.log('replay track', sender)
        if (sender.track?.kind == 'video') {
          sender.replaceTrack(myStream.getVideoTracks()[0])
          console.log('da replace', sender)
        }
      })

      console.log(friendConnection.localStream.addTrack(myStream.getVideoTracks()[0]))
    } else {
      if (myStream && myStream.getVideoTracks().length > 0) {
        const track = myStream.getVideoTracks()[0]
        track.stop()
        myStream.removeTrack(track)
      }
    }
    
    socket.emit('toggle_cam', JSON.stringify({
      status: status,
      socket_id: friendConnection.peer
    }))
  }

  const handleMicro = status => {
    if (myStream && myStream.getAudioTracks().length > 0) {
      myStream.getAudioTracks()[0].enabled = status
    }
  }

  const handleToggle = name => {
    const status = !options[name]
    options[name] = status
    setOptions({
        ...options
    })

    switch (name) {
      case 'video':
        handleVideo(status)
        break
      case 'microphone':
        handleMicro(status)
        break
      case 'turnOff':
        window.close()
        break
      case 'exit': 
        window.close()
        break
    }
  }

  // load option default
  useEffect(() => {
    async function initStream() {
      const stream = await getStream({
        video: options.video,
        audio: options.microphone
      })
      setMyStream(stream)
    }
    initStream()

    socket.on('end_call', () => {
      setCallStatus('ENDED')
    })
  }, [])

  return (
    <div className='call__page'>
      {
        ['WAITING', 'ENDED', 'REJECT'].includes(callStatus) && <CallWaiting status={callStatus} {...callInfo.receiver} />
      }

      {
        callStatus == 'CALLING' && <VideoGrid 
          myStream={myStream} 
          friendStream={friendStream} 
          myCamStatus={options.video} 
          friendCamStatus={friendCamStatus} 
          {...callInfo}
        />
      }
      <CallOption {...options} onToggle={handleToggle} status={callStatus} />
    </div>
  );
}

export default VideoCallPage;