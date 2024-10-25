import { useEffect } from 'react'

import './App.css'

function App() {
useEffect(() => {
  //@ts-ignore
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
