
import React, {useRef}from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
        id: 1,
        username: 'herrakam',
        email: 'fm1003@naver.com',
        active: true,
    },
    {
        id: 2,
        username: 'herrakam2',
        email: 'fm10033@naver.com',
        active: false,
    },
    {
        id: 3,
        username: 'herrakam3',
        email: 'fm100333@naver.com',
        active: false,
    }
]

const nextid = useRef(4)

const onCreate = ()=>{
  nextid.current += 1
}
  return (
    <>
      <UserList users = {users}></UserList>
    </>
  )
}

export default App;

