import { useState } from 'react'
import { Formulario } from './pages/Formulario/Formulario'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Formulario />
  )
}

export default App
