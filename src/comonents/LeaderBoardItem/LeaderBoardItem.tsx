// src/components/Item.tsx
import React from 'react';
import { HistoryAvatar } from '../HistoryAvatar/HistoryAvatar';
import style from './style.module.css';
import {Box} from '../../assets/svg';
interface ItemProps {
    avatar: string;
    title: string; 
    numGifts: number;
    place: string;
    amountOrRecipient: string;
}


export const LeaderBoardItem: React.FC<ItemProps> = ({ avatar, title, numGifts, place }) => {
 
    return ( 
        <div className={style.item}>
            <div>
                <HistoryAvatar icon={avatar} Badge={undefined} backgroundColor={''}  />
            </div>
            <div className={style.name}>
            <p>
            {title}
            </p>
            <div className={style.blue}>
<Box /> <span>{numGifts} gifts</span>
            </div>
            </div>
            <div className={style.price}><p>{place}</p></div> 
        </div>
    );
};
