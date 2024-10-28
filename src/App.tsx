import { ButtonBar } from './comonents/ButtonBar/ButtonBar';
import { Header } from './comonents/Header/Header';
import TabBar from './comonents/TabBar/TabBar';
import { HistoryItem } from './comonents/HistoryItem/HistoryItem';
import historyIcon from './assets/icons/08.png';
import historyIcon2 from './assets/icons/09.png';
import defaultAvatar from '/defaultAvatar.png';
import { GiftHistoryItem } from './comonents/GiftHistoryItem/GiftHistoryItem';
import { LeaderBoardItem } from './comonents/LeaderBoardItem/LeaderBoardItem';
import { Icons } from './comonents';
import { Gift } from './comonents/Gift/Gift';
// @ts-ignore
export const tg = window?.Telegram?.WebApp;

function App() {
console.log("telegram", tg);
  return (
    <body>
    <Header closeText="Close" svgIcon={Icons.td} />
   <HistoryItem type="buy" title="Delicius Cake" icon={historyIcon2}  amountOrRecipient='10' />
   <HistoryItem type="sent" title="Red Star" icon={historyIcon}  amountOrRecipient='Alicia' />
   <HistoryItem type="receive" title="Red Star" icon={historyIcon}  amountOrRecipient='Alicia' />
  <GiftHistoryItem avatar={defaultAvatar} type='sent' sender="Alicia" recipient="Mark" title={''} amountOrRecipient={''}/>
  <GiftHistoryItem avatar={defaultAvatar} type='buy' sender="Alicia" recipient="Mark" title={''} amountOrRecipient={''}/>
  <GiftHistoryItem avatar={defaultAvatar} type='buy' sender="Alicia" recipient="Mark" title={''} amountOrRecipient={''}/>
  <GiftHistoryItem avatar={defaultAvatar} type='buy' sender="Alicia" recipient="Mark" title={''} amountOrRecipient={''}/>
  <GiftHistoryItem avatar={defaultAvatar} type='buy' sender="Alicia" recipient="Mark" title={''} amountOrRecipient={''}/>

<LeaderBoardItem avatar={defaultAvatar} title="Alicia" amountOrRecipient={''} numGifts={10000} place="#10"/>
<LeaderBoardItem avatar={defaultAvatar} title="Alicia" amountOrRecipient={''} numGifts={10000} place="🥇"/>
<ButtonBar />
<TabBar />

<div>
<Gift score={`${1} of ${10}K`} title={'Delicious Cake'}/>

</div>
    </body>
  )
}

export default App
