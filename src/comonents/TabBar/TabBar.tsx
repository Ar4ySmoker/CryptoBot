import style from "./style.module.css"
import { Gifts, Laderboard, Profile, Store } from "../../assets/svg";
import { IndicatorBar } from "../Indicator/Indicator";

export default function TabBar() {
  return (
    <><div className={style.tabBar}>
          <div className={style.item}>
              <Store />
              <p>Store</p>
          </div>
          <div className={style.item}>
              <Gifts />
              <p>Gifts</p>
          </div>
          <div className={style.item}>
              <Laderboard />
              <p>Laderboard</p>
          </div>
          <div className={style.item}>
              <Profile />
              <p>Profile</p>
          </div>
      </div><IndicatorBar /></>

  );
}