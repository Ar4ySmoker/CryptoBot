// // src/components/Item.tsx
// import React from 'react';
// import { HistoryIcon } from '../HistoryIcon/Historyicon';
// import style from './style.module.css';
// import { Plan, Magazine, BoxArchive } from '../../assets/svg'; // Импортируйте ваши бейджи

// interface ItemProps {
//     icon: string;
//     type: 'sent' | 'buy' | 'receive'; 
//     title: string; 
//     amountOrRecipient: string;
// }
// const colorMap: Record<string, string> = {
//     buy: getComputedStyle(document.documentElement).getPropertyValue('--accent-blue-color').trim(),
//     sent: getComputedStyle(document.documentElement).getPropertyValue('--accent-purple-color').trim(),
//     receive: getComputedStyle(document.documentElement).getPropertyValue('--accent-green-color').trim(),
// };
// const badgeMap: Record<string, React.ComponentType> = {
//     buy: Magazine, // Ваш бейдж для buy
//     sent: Plan,    // Ваш бейдж для sent
//     receive: BoxArchive, // Ваш бейдж для receive
// };
// export const HistoryItem: React.FC<ItemProps> = ({ icon,  type, title, amountOrRecipient }) => {
//     const backgroundColor = colorMap[type]; 
//     const Badge = badgeMap[type];
//     let displayText: JSX.Element;
//     switch (type) {
//         case 'buy':
//             displayText = <span className={style.black}>- {amountOrRecipient} USDT</span>; 
//             break;
//         case 'sent':
//             displayText = (
//                 <>
//                     <span className={style.black}>to </span>
//                     <span className={style.blue}>{amountOrRecipient}</span> 
//                 </>
//             );
//             break;
//         case 'receive':
//             displayText = (
//                 <>
//                     <span >from </span>
//                     <span className={style.blue}>{amountOrRecipient}</span>
//                 </>
//             );
//             break;
//         default:
//             displayText = <span></span>;
//     }
//     return ( 
//         <div className={style.item}>
//             <div>
//                 <HistoryIcon icon={icon} Badge={Badge} backgroundColor={backgroundColor} />
//             </div>
//             <div className={style.name}>
//             <span>
//     {type === 'sent' ? 'Sent' : type === 'receive' ? 'Received' : 'Buy'}
// </span>
//                 <p>{title}</p>
//             </div>
//             <div className={style.price}><p>{displayText}</p></div> 
//         </div>
//     );
// };
import React from 'react';
import { HistoryIcon } from '../HistoryIcon/Historyicon';
import style from './style.module.css';
import { Icons } from '../index'; // Убедитесь, что путь правильный

interface ItemProps {
    icon: string;
    type: 'sent' | 'buy' | 'receive'; 
    title: string; 
    amountOrRecipient: string;
}

const colorMap: Record<string, string> = {
    buy: getComputedStyle(document.documentElement).getPropertyValue('--accent-blue-color').trim(),
    sent: getComputedStyle(document.documentElement).getPropertyValue('--accent-purple-color').trim(),
    receive: getComputedStyle(document.documentElement).getPropertyValue('--accent-green-color').trim(),
};

const badgeMap: Record<string, React.ComponentType<{}>> = { // Используем ComponentType
    buy: Icons.mz,
    sent: Icons.pn,    
    receive: Icons.be,
};

export const HistoryItem: React.FC<ItemProps> = ({ icon, type, title, amountOrRecipient }) => {
    const backgroundColor = colorMap[type]; 
    const Badge = badgeMap[type];
    
    let displayText: JSX.Element;
    switch (type) {
        case 'buy':
            displayText = <span className={style.black}>- {amountOrRecipient} USDT</span>; 
            break;
        case 'sent':
            displayText = (
                <>
                    <span className={style.black}>to </span>
                    <span className={style.blue}>{amountOrRecipient}</span> 
                </>
            );
            break;
        case 'receive':
            displayText = (
                <>
                    <span>from </span>
                    <span className={style.blue}>{amountOrRecipient}</span>
                </>
            );
            break;
        default:
            displayText = <span></span>;
    }

    return ( 
        <div className={style.item}>
            <div>
                <HistoryIcon icon={icon} Badge={Badge} backgroundColor={backgroundColor} />
            </div>
            <div className={style.name}>
                <span>
                    {type === 'sent' ? 'Sent' : type === 'receive' ? 'Received' : 'Buy'}
                </span>
                <p>{title}</p>
            </div>
            <div className={style.price}><p>{displayText}</p></div> 
        </div>
    );
};
