import style from './style.module.css';

interface ButtonProps {
    label: string;
    icon?: React.FC;
}

export const Button = ({ label, icon: Icon }: ButtonProps) => {
    return (
        <div className={style.button}>
            <button>
                {Icon ? <Icon /> : null} 
                {label}
            </button>
        </div>
    );
};
