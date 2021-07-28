
import React, { useRef, useState, useMemo, useCallback} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countUsers (users){
  console.log('활성된 사람 수 새는 중');
  return(users.filter(user=>user.active).length)
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  const { username, email } = inputs
  const [users, setUsers] = useState([
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
  ])

  const nextId = useRef(4)
  const onChange = useCallback( e => {
    const { name, value } = e.target
    setInputs(inputs=> ({
      ...inputs,
      [name]: value,
    }))
  },[])
  const onCreate = useCallback( () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users=>users.concat(user))
    setInputs({
      ...inputs,
      username: '',
      email: ''
    })
  },[ username, email,inputs])

  const onRemove = useCallback( (id) => {
    setUsers(users=>users.filter(user => user.id !== id))
  },[])

  const onToggle = useCallback( id=>{
    setUsers(users=>users.map(user=>user.id===id?
      {...user, active : !user.active}
      : user
      ))
  },[])

  const count = useMemo(()=> countUsers(users), [users])
  return (
    <>
      <CreateUser onChange={onChange} username={username} onCreate={onCreate} email={email}></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
      <div className="countUser">{count}</div>
    </>
  )
}

export default App;

