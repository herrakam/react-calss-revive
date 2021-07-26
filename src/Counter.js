import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(5)
    const onIncrease = () => {
        setNumber(number + 1)
    }
    const onDecrease = ( )=> {
        setNumber(number - 1)
    }

    return (
        <>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <div className="showCount">{number}</div>
        </>
    )
}

export default Counter