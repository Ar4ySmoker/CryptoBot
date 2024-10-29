// src/components/Item.tsx
import React from 'react';
import style from './style.module.css';
import { Plan, Magazine } from '../../assets/svg'; // Импортируйте ваши бейджи
import { Avatar } from '../Avatar/Avatar';

interface ItemProps {
    avatar: string;
    type: 'sent' | 'buy'; 
    title: string; 
    amountOrRecipient: string;
    sender: string;
    recipient: string;
}
const colorMap: Record<string, string> = {
    buy: getComputedStyle(document.documentElement).getPropertyValue('--accent-blue-color').trim(),
    sent: getComputedStyle(document.documentElement).getPropertyValue('--accent-purple-color').trim(),
    receive: getComputedStyle(document.documentElement).getPropertyValue('--accent-green-color').trim(),
};
const badgeMap: Record<string, React.ComponentType> = {
    buy: Magazine,
    sent: Plan,   
};
export const GiftHistoryItem: React.FC<ItemProps> = ({ avatar,  type, sender, recipient }) => {
    const backgroundColor = colorMap[type]; 
    const Badge = badgeMap[type];
    let displayText: JSX.Element;
    switch (type) {
        case 'buy':
            displayText = (
            <>
            <span className={style.blue}>{sender}</span>
            <span className={style.black}> bought a gift</span>

            </>
            )
            break;
        case 'sent':
            displayText = (
                <>
                    <span className={style.blue}>{sender}</span>
                    <span> sent gift to </span>
                    <span className={style.blue}>{recipient}</span> 
                </>
            );
            break;
       
        default:
            displayText = <span></span>;
    }
    return ( 
        <div className={style.item}>
            <div>
                <Avatar icon={avatar} Badge={Badge} backgroundColor={backgroundColor} />
            </div>
            <div className={style.name}>
            <span>
    {type === 'sent' ? 'Send gift' : 'Buy gift'}
</span>
                <p>{displayText}</p>
            </div>
            {/* <div className={style.price}><p>{displayText}</p></div>  */}
        </div>
    );
};
