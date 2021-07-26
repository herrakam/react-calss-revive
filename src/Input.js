import React, { useState, useRef } from 'react'

function Input() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname:'',
    })
    const nameInput = useRef()
    const {name, nickname} = inputs
    const onChange = (e)=>{
        const {name,value} = e.target
        setInputs({
            ...inputs,
            [name]:value,
        })
        
    }
    const onReset = ()=>{
        setInputs({
            name:'',
            nickname:"",
        })
        nameInput.current.focus()
    }

   return(
       <>
       <input  onChange = {onChange} name = 'name' placeholder='이름' value={name} ref={nameInput}/>
       <input  onChange = {onChange} name = 'nickname' placeholder = '닉네임' value = {nickname}></input>
       <div className="showInfo">이름(닉네임):{name}({nickname})</div>
       <button className="reset" onClick={onReset}>초기화</button>
       </>
   )
}

export default Input