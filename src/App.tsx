import './App.css'
import { ButtonBar } from './comonents/ButtonBar/ButtonBar';
import { Header } from './comonents/Header/Header';
import { ThreeDots } from './assets/svg';
import TabBar from './comonents/TabBar/TabBar';
import { HistoryItem } from './comonents/HistoryItem/HistoryItem';
import historyIcon from './assets/icons/08.png';
import historyIcon2 from './assets/icons/09.png';
// @ts-ignore
export const tg = window?.Telegram?.WebApp;

function App() {
console.log("telegram", tg);
  return (
    <body>
    <Header closeText="Close" svgIcon={<ThreeDots />} />
   <ButtonBar />
   <TabBar />
   <HistoryItem type="buy" title="Delicius Cake" icon={historyIcon2}  amountOrRecipient='10' />
   <HistoryItem type="sent" title="Red Star" icon={historyIcon}  amountOrRecipient='Alicia' />
   <HistoryItem type="receive" title="Red Star" icon={historyIcon}  amountOrRecipient='Alicia' />

    </body>
  )
}

export default App
