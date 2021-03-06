import React, { createContext, useContext } from 'react'

const myContext = createContext('default')

function Child() {
    const text = useContext(myContext)
    return (
        <div className="child"> 안녕하세요 {text}</div>
    )
}

function Parent({ text }) {
    return (
        <Child text={text}></Child>
    )
}

function GrandParent({ text }) {
    return (
        <Parent text={text}></Parent>
    )
}

function ContextSample({ text }) {
    return (
        <myContext.Provider value='good'>
            <GrandParent></GrandParent>
        </myContext.Provider>
    )
}

export default ContextSample;