import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePages from './pages/HomePages'
import TableCurrency from './components/TableCurrency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePages/>
      <TableCurrency/>
    </>
  )
}

export default App
