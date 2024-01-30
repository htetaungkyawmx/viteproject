import React, { useState } from 'react'

const MyBtton = ({btnClassName,btnLabel}) => {
    return (
        <button className={'btn ${btnClassName}'}>{btnLabel}</button>
    )
}
const Button = () => {
    const [count,setCount] = useState(0);

    return (
        <>
           <p>My Count {count}</p>
           {/* <button className='btn increase'>Increment</button>
           <button className='btn decrease'>Decrement</button> */}
           <MyBtton btnClassName="increase" btnLabel="Increment"/>
           <MyBtton btnClassName="decrease" btnLabel="Decrement"/>
        </>
    )
}  