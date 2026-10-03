import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-primary'>Welcome to React...@@@@@@ </h1>
      <NavBar/>

    </>
  )
}

export default App
