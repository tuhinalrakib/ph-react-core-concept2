import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'
import Players from './Players'
import Task1 from './Task1'
import Task2 from './Task2'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res=>res.json())

const fetchfriends = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {
  const friendsPromise = fetchfriends()
  
  return (
    <>
      <h1>Vite + React</h1>
      <Task1></Task1>
      <Task2></Task2>
      <Players></Players>
      {/* <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are comming....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      {/* <Counter></Counter>
      <Batsman></Batsman> */}
      
    </>
  )
}

export default App
