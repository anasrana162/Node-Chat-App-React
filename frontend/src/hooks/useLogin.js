import React, { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/authContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        console.log("Login working");
        setLoading(true)
        const success = handleInputErrors({ username, password });

        if (!success) {
            setLoading(false)
            return;
        }

        try {
            const res = await fetch("api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data);
            // local storage
            localStorage.setItem("chat-user", JSON.stringify(data))
            // context
            setAuthUser(data)
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }


    return { loading, login }

}

function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill in all the feilds")
        return false
    }

    return true
}


export default useLogin