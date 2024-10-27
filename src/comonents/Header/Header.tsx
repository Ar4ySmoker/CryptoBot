import style from './style.module.css';

interface HeaderProps {
  closeText: string;
  svgIcon: React.ReactNode;
}

export const Header = ({ closeText, svgIcon }: HeaderProps) => {
  return (
    <div className={style.header}>
      <div className={style.items}>
        <p>{closeText}</p>
      </div>
      <div className={style.h1}>
        <span>Gift App</span>
        <span>mini app</span>
      </div>
      <div className={style.items}>
        {svgIcon}
      </div>
    </div>
  );
};
