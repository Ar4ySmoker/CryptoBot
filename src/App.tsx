import { useEffect } from 'react'

import './App.css'
import { Header } from './comonents/Header/Header';

// @ts-ignore
export const tg = window?.Telegram?.WebApp;

function App() {

console.log("telegram", tg);
  return (
    <>
    <Header />
   <h1 className='text-blue-500'>CryptoBot</h1>
    </>
  )
}

export default App
