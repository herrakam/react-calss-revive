import React from 'react'

function User({ user, onRemove,onToggle}) {
    const {username, email, id, active} = user
    return (
        <div className="user">
            <b style={{
                color: active ? 'blue' : 'black',
                cursor: 'pointer'
            }} onClick={()=>{onToggle(id)}}>{username}</b><span>{email}</span><button onClick={()=>onRemove(id)}>제거</button>
        </div>
    )
}


function UserList({users, onRemove, onToggle}) {

    return (
    <>
         {users.map(user => <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)}         
    </>

            )
}
            export default UserList;