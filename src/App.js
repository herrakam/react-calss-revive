
import React, { useRef, useReducer, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countUsers(users) {
  console.log('활성된 사람 수 새는 중');
  return (users.filter(user => user.active).length)
}

function reducer(state, action) {
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs:{ 
          ...state.inputs,
          [action.name]:[action.value]
        }
      }
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
  inputs: {
    username: '',
    email: ''
  },
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
  const {username, email} = state.inputs

  const nextId = useRef(4)


  const onChange = useCallback(e => {
    const {name, value} = e.target
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

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
  },[username, email])

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

