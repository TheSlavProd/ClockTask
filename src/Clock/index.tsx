import styles from "./clock.module.scss";

interface IProps {
  secondArrow: number;
  minuteArrow: number;
  hourArrow: number;
}

export const Clock: React.FC<IProps> = ({
  secondArrow,
  minuteArrow,
  hourArrow,

 }) => {
  return (
    <div className={styles.clock}>
      <div
        className={[styles.clock__hour, styles.hand].join(" ")}
        style={{ transform: `translate(-50%) rotate(${hourArrow * 360}deg)` }}
      ></div>
      <div
        className={[styles.clock__minute, styles.hand].join(" ")}
        style={{ transform: `translate(-50%) rotate(${minuteArrow * 360}deg)` }}
      ></div>
      <div
        className={[styles.clock__second, styles.hand].join(" ")}
        style={{ transform: `translate(-50%) rotate(${secondArrow * 360}deg)` }}
      ></div>

      <div className={[styles.number, styles.number1].join(" ")}>
        <div className={ styles.item1}>1</div>
      </div>
      <div className={[styles.number, styles.number2].join(" ")}>
        <div className={ styles.item2}>2</div>
      </div>
      <div className={[styles.number, styles.number3].join(" ")}>
        <div className={ styles.item3}>3</div>
      </div>
      <div className={[styles.number, styles.number4].join(" ")}>
        <div className={ styles.item4}>4</div>
      </div>
      <div className={[styles.number, styles.number5].join(" ")}>
        <div className={ styles.item5}>5</div>
      </div>
      <div className={[styles.number, styles.number6].join(" ")}>
        <div className={ styles.item6}>6</div>
      </div>
      <div className={[styles.number, styles.number7].join(" ")}>
        <div className={ styles.item7}>7</div>
      </div>
      <div className={[styles.number, styles.number8].join(" ")}>
        <div className={ styles.item8}>8</div>
      </div>
      <div className={[styles.number, styles.number9].join(" ")}>
        <div className={ styles.item9}>9</div>
      </div>
      <div className={[styles.number, styles.number10].join(" ")}>
        <div className={ styles.item10}>10</div>
      </div>
      <div className={[styles.number, styles.number11].join(" ")}>
        <div className={ styles.item11}>11</div>
      </div>
      <div className={[styles.number, styles.number12].join(" ")}>
        <div className={ styles.item12}>12</div>
      </div>
    </div>
  );
};
