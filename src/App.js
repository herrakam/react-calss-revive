
import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

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
  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users.concat(user))
    setInputs({
      ...inputs,
      username: '',
      email: ''
    })
  }
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id=>{
    setUsers(users.map(user=>user.id===id?
      {...user, active : !user.active}
      : user
      ))
  }



  return (
    <>
      <CreateUser onChange={onChange} username={username} onCreate={onCreate} email={email}></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
    </>
  )
}

export default App;

