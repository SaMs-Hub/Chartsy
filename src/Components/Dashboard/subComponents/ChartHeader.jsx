import styles from "../styles.module.css";
import useDashboard from "../../../hooks/useDashboard";

const ChartHeader = () => {
  const { chartData } = useDashboard();

  return (
    <div className={styles.currencyHeader}>
      <h2 className={styles.coinName}>BitCoin</h2>

      <div>
        <p>
          {chartData?.[0]?.[1].toFixed(2)}{" "}
          <span className={styles.currencyName}>INR</span>
        </p>
        <p className={styles.currencyProfit}>+223(3.54%)</p>
      </div>
    </div>
  );
};

export default ChartHeader;
