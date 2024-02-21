import React,{useState} from 'react'
import useConverstaion from '../zustand/useConversation';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);

    const { messages, setMessages, selectedConversation } = useConverstaion()
    // console.log("selected conversation id",selectedConversation._id);

    const sendMessage = async (message) => {
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data);

            setMessages([...messages, data]);

        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }

}

export default useSendMessage