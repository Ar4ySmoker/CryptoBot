
import style from './style.module.css';
interface HistoryIconProps {
    icon: string;
    Badge?: React.ComponentType;
    backgroundColor: string; 
}
export const Avatar = ({ icon, Badge, backgroundColor }: HistoryIconProps) => {
    return ( 
        <div className={style.historyIcon}>
            <img src={icon} alt="history icon" />
            {Badge && (
                <div className={style.bagdage} style={{ backgroundColor }}>
                    <Badge />
                </div>
            )}
        </div>
    );
};
