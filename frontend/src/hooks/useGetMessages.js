import React, { useEffect, useState } from 'react'
import useConverstaion from '../zustand/useConversation';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConverstaion()

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`)
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                // console.log(data);

                setMessages(data);

            } catch (err) {
                toast.error(err.message)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getMessages();

    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages