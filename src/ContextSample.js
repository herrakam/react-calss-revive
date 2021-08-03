import React, {useContext} from 'react'

function Child({text}){
    return(
        <div className="child"> 안녕하세요 {text}</div>
    )
}

function Parent({text}){
    return(
        <Child text = {text}></Child>
    )
}

function GrandParent({text}){
    return(
    <Parent text = {text}></Parent>
    )
}

function ContextSample({text}){
    return(
    <GrandParent text= 'good'></GrandParent>
    )
}

export default ContextSample;