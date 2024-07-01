import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full text-9xl text-zinc-50 bg-black flex justify-center items-center'>
        <h1>Hello World!</h1>
        <h3>Hey It's OSMsss...</h3>
      </div>
    </>
  )
}

export default App
