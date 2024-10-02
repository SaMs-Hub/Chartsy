import { Line } from "react-chartjs-2";
import styles from "../styles.module.css";
import useDashboard from "../../../hooks/useDashboard";
import "chart.js/auto";
import { chartDays } from "../utils";

const ChartViewer = () => {
  const { chartData, currentDay, loadingData, handleCurrentDay } =
    useDashboard();

  return (
    <div>
      <div className={styles.modeSelector}>
        {chartDays.map((item) => {
          const isCurrentDay = currentDay === item.days;
          return (
            <p
              onClick={() => {
                handleCurrentDay(item.days);
              }}
              key={item}
              className={isCurrentDay ? styles.selectedDay : styles.day}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      <div className={styles.coinInfoContainer}>
        {loadingData ? (
          <div className="loader">Loading</div>
        ) : (
          <>
            <Line
              data={{
                labels: chartData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: chartData.map((coin) => coin[1]),
                    label: `Price ( Past ${currentDay} Days ) in INR`,
                    borderColor: "#5f55f0",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ChartViewer;
