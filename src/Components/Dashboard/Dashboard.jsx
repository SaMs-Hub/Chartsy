import ChartViewer from "./subComponents/ChartViewer";
import styles from "./styles.module.css";
import ChartHeader from "./subComponents/ChartHeader";
import ModeSelector from "./subComponents/ModeSelector";
import useDashboard from "../../hooks/useDashboard";

const Dashboard = () => {
  const { chartData, currentMode } = useDashboard();

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.coinContainer}>
        {chartData[0] && <ChartHeader />}
        <ModeSelector />
        {currentMode == "Chart" ? (
          <ChartViewer />
        ) : (
          <div> No data available</div>
        )}
      </div>
      )}
    </div>
  );
};

export default Dashboard;
