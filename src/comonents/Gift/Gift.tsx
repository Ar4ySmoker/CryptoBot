import style from './style.module.css';
import { Icons } from "../index";
import GiftImg from "../../assets/icons/09.png"
import { ButtonRounded } from '../ButtonRounded/ButtonRounded';
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