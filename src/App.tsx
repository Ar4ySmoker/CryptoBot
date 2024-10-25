import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  const tg = window?.Telegram?.WebApp;
//  tg.initData();
console.log(tg);

}, [])

  return (
    <>
   <h1>Привет CryptoBot</h1>
    </>
  )
}

export default App
