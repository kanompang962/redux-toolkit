import React from 'react'
import { useSelector } from 'react-redux'

const Comp1 = ({ send }) => {
    const { userStore } = useSelector((state) => ({ ...state }))
    return (

        <>
            <h2>Component1: {userStore.valueCom1}</h2>
            <p>props: {send}</p>
        </>
    )
}

export default Comp1