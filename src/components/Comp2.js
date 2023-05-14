import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from "../store/userSlice";

const Comp2 = () => {
    const { userStore } = useSelector((state) => ({ ...state }))

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login())
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (

        <>
            <h2>component 2</h2>
            <p>{userStore.valueCom2}</p>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Comp2