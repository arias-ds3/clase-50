import { useState } from 'react'
import './App.css'
import Ejemplo from './components/Ejemplo'
import EjemploUseEfect from './components/EjemploUseEfect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ejemplo/>
      <EjemploUseEfect/>
    </>
  )
}

export default App