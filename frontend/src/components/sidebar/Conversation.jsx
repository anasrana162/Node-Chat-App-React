import React from 'react'
import useConverstaion from '../../zustand/useConversation'

const Conversation = ({ conversation, emoji, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConverstaion();
    const isSelected = selectedConversation?._id === conversation?._id;
    return (
        <>
            <div className={`flex gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
              ${isSelected ? "bg-sky-500" : ""} `}
              onClick={()=>setSelectedConversation(conversation)}
              >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        {/* https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png */}
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1 mt-3' >
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    )
}

export default Conversation

// const Conversation = () => {
//     return (
//         <>
//             <div className='flex gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//                 <div className='avatar online'>
//                     <div className='w-12 rounded-full'>
//                         {/* https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png */}
//                         <img src="https://avatar.iran.liara.run/public" alt='user avatar' />
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1 mt-3' >
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-200'>John Doc</p>
//                         <span className='text-xl'>🎃</span>
//                     </div>
//                 </div>
//             </div>
//             <div className='divider my-0 py-0 h-1'/>
//         </>
//     )
// }
