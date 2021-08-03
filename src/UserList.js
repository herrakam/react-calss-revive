import React, {useContext, useEffect} from 'react'
import { UserDispatch } from './App';

const User = React.memo( function User({ user, onRemove,onToggle}) {
    const {username, email, id, active} = user
    const dispatch = useContext(UserDispatch)
    useEffect(()=>{
        console.log(user);
        console.log('user값 설정됨');
        return(()=>{
            console.log('user 바뀌는 중');
        })
    },[user])
    return (
        <div className="user">
            <b style={{
                color: active ? 'blue' : 'black',
                cursor: 'pointer'
            }} onClick={()=>dispatch({
                type: 'TOGGLE_USER',id
            })}>{username}</b><span>{email}</span><button onClick={()=> dispatch({
                type:'REMOVE_USER',id
            })}>제거</button>
        </div>
    )
})


function UserList({users}) {

    return (
    <>
         {users.map(user => <User user={user} key={user.id} />)}         
    </>

            )
}
            export default React.memo( UserList);