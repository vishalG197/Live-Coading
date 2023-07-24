import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './Component/InputForm'
import { PinTab } from './Component/PinTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PinTab length={5} maxchar={1}/>
    </>
  )
}

export default App
