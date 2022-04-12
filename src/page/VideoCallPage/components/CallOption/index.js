import React from 'react';
import { useLocation } from 'react-router-dom';
import CallOptionItem from './CallOptionItem';
import queryString from 'query-string'
import './style.css'

function CallOption(props) {
    const { search } = useLocation()
    const { has_video } = queryString.parse(search)
    const { video, microphone, turnOff, onToggle, status } = props
    console.log(has_video)
    return (
        <div className='call__option'>
            {
                ['ENDED', 'REJECT'].includes(status)  ? (
                    <>
                        <CallOptionItem onClick={(name) => onToggle(name)} name='exit' active danger />
                    </>
                ) : (
                    <>
                        {
                            (has_video === 'true') && <CallOptionItem onClick={(name) => onToggle(name)} name='video' active={video} />
                        }
                        <CallOptionItem onClick={(name) => onToggle(name)} name='microphone' active={microphone} />
                        <CallOptionItem onClick={(name) => onToggle(name)} name='phone' danger active={turnOff} />
                    </>
                )
            }
        </div>
    );
}

export default CallOption;