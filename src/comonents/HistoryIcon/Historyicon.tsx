// import historyIcon from '../../assets/icons/09.png';
// import { Magazine } from '../../assets/svg';
// import style from './style.module.css';
// export const HistoryIcon = () => {
//     return ( 
//         <div className={style.historyIcon}>
//           <img src={historyIcon} alt="history icon" />
//           <div className={style.bagdage}>
//           <Magazine/>
//           </div>
//         </div>
//     )
// }

// src/components/HistoryIcon.js
import style from './style.module.css';
interface HistoryIconProps {
    icon: string;
    Badge: React.ComponentType;
    backgroundColor: string; 
}
export const HistoryIcon = ({ icon, Badge, backgroundColor }: HistoryIconProps) => {
    return ( 
        <div className={style.historyIcon}>
            <img src={icon} alt="history icon" />
            <div className={style.bagdage} style={{ backgroundColor }}>
                <Badge />
            </div>
        </div>
    );
};
