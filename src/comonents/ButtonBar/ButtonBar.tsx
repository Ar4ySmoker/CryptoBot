import { IndicatorBar } from "../Indicator/Indicator"
import style from "./style.module.css"
export const ButtonBar = () => {
  return (  
      <><div className={style.button}>
          <button>Label</button>
      </div>
      <IndicatorBar/>
          </>
  )
}