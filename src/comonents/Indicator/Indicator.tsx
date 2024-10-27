import { Indicator } from '../../assets/svg';
import style from "./style.module.css"

export const IndicatorBar = () => {
  return (
    <div className={style.indicator}>
    <Indicator />
 </div>
  );
}