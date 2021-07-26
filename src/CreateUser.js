import React from 'react'

function CreateUser({username, email, onChange, onCreate}){
    return (
        <div>
        <input type="text" placeholder='이름' name='username' value = {username} onChange={onChange} />
        <input type="text" placeholder='계정' name='email' value = {email} onChange={onChange} />
        <button onClick={onCreate}>등록</button>
        </div>
        )
}

export default CreateUser