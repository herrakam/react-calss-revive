import React, { useState, useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onDecrease = ( )=> {
        dispatch({
            type:'DECREMENT'
        })
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