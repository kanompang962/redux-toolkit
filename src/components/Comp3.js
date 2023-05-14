import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addArr } from "../store/userSlice";

const Comp3 = () => {
    const { userStore } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
    const user = {
        username: 'kanompang962',
        password: '123456'
    }

    const handleAdd = () => {
        dispatch(addArr(user));
    }

    return (
        <>
            <h2>component 3: </h2>
            <p>{userStore.valueCom2}</p>
            <button onClick={handleAdd}>Add Data</button>
        </>
    )
}

export default Comp3