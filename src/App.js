
import React, { useRef, useReducer, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import useInputs from "./useInputs";

function countUsers(users) {
  console.log('활성된 사람 수 새는 중');
  return (users.filter(user => user.active).length)
}

function reducer(state, action) {
  switch(action.type){
    case 'CREATE_USER':
        return{
          inputs:initialState.inputs,
          users:state.users.concat(action.user)
        }
    case 'TOGGLE_USER':
      return{
        ...state,
        users:state.users.map(user =>user.id === action.id
          ? {...user,active: !user.active}
          : user
        )
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users:state.users.filter(user=> user.id !== action.id)
      }
    default:
      return false 
  }
}
const initialState = {
  users: [
    {
      id: 1,
      username: 'herrakam',
      email: 'fm1003@naver.com',
      active: true
    },
    {
      id: 2,
      username: 'herrakam2',
      email: 'fm10033@naver.com',
      active: true
    },
    {
      id: 3,
      username: 'herrakam3',
      email: 'fm100333@naver.com',
      active: false
    }
  ]
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {users} = state
  const nextId = useRef(4)
  const [form, onChange, reset] = useInputs({
    username:'',
    email:''
  })
  const {username, email} = form;
  const onCreate = useCallback(()=>{
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      } 
    })
    nextId.current += 1
    reset()
  },[username, email, reset])

  const onToggle = useCallback(id=>{
    dispatch({
      type:'TOGGLE_USER',
      id
    })
  },[])

  const onRemove = useCallback(id=>{
    dispatch({
      type:'REMOVE_USER',
      id
    })
  },[])

  const count = useMemo(()=> countUsers(users),[users])

  return (
    <>
      <CreateUser username={username } email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users} onToggle={onToggle} onRemove={onRemove }></UserList>
      <div className="countUser">{count}</div>
    </>
  )
}

export default App;

