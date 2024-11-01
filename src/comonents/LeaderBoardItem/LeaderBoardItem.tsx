// src/components/Item.tsx
import React from 'react';
import { Avatar } from '../Avatar/Avatar';
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
            <div className={style.name}>
                <Avatar icon={avatar} Badge={undefined} backgroundColor={''}  />
            <div className={style.title}>
            <p>
            {title}
            </p>
            <div className={style.blue}>
<Box /> <span>{numGifts} gifts</span>
            </div>
            </div>
            </div>
            <div className={style.price}><p>{place}</p></div> 
        </div>
    );
};
