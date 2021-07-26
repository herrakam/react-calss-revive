import React from 'react'

function User({ user, onRemove }) {
    const {username, email, id} = user
    return (
        <div className="user">
            <b>{username}</b><span>{email}</span><button onClick={()=>onRemove(id)}>제거</button>
        </div>
    )
}


function UserList({users, onRemove}) {

    return (
    <>
         {users.map(user => <User user={user} key={user.id} onRemove={onRemove}/>)}         
    </>

            )
}
            export default UserList;