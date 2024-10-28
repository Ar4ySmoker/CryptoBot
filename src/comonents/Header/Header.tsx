import style from './style.module.css';

interface HeaderProps {
  closeText: string;
  svgIcon: React.FC;
}

export const Header = ({ closeText, svgIcon: SvgIcon }: HeaderProps) => {
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
        <SvgIcon/>
      </div>
    </div>
  );
};
