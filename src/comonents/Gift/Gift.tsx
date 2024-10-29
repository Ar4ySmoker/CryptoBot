import style from './style.module.css';
import { Icons } from "../index";
import GiftImg from "../../assets/icons/Cake.png"
import { ButtonRounded } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';
import AvatarImg from '/defaultAvatar.png'
export const Gift = ({score, title}: any) =>{
    return(
<>
<div className={style.card}>
<span>{score}</span>
<img src={GiftImg} alt="gift" />
<p>{title}</p>
<ButtonRounded label="1000 USDT" icon={Icons.eth}/>
</div>
</>
    )
}
export const GiftPurchase = ({title}: any) =>{
    return(
<>
<div className={style.cardPurchase}>
<p>{title}</p>
<img src={GiftImg} alt="gift" />
<ButtonRounded label="Send" />
</div>
</>
    )
}

export const GiftInProfile = ({title,score}: any) =>{
    return(
<>
<div className={style.cardInProfile}>
<div className={style.headCardProfile}>
    <Avatar icon={AvatarImg} backgroundColor={''}/>
    <span>{score}</span>
    </div>
<img src={GiftImg} alt="gift" />
<p>{title}</p>
</div>
</>
    )
}