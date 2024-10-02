import styles from "../styles.module.css";
import useDashboard from "../../../hooks/useDashboard";

const ChartHeader = ({ prices }) => {
  return (
    <div className={styles.currencyHeader}>
      <h2 className={styles.coinName}>BitCoin</h2>

      <div>
        <p>
          {prices?.[prices.length - 1]?.[1].toFixed(2)}{" "}
          <span className={styles.currencyName}>INR</span>
        </p>
        <p className={styles.currencyProfit}>+223(3.54%)</p>
      </div>
    </div>
  );
};

export default ChartHeader;
