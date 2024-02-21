import React from 'react'
import { useAuthContext } from '../../context/authContext'
import useConverstaion from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTimes';

const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConverstaion();
    // console.log("message.senderId", message?.senderId);
    // console.log("authUser?._id", authUser?.user_data?._id);
    const fromMe = message?.senderId === authUser?.user_data?._id
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser?.user_data?.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const formattedTime = extractTime(message?.createdAt);
    // console.log("fromMe",fromMe);

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message?.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center' >{formattedTime}</div>
        </div>
    )
}

export default Message