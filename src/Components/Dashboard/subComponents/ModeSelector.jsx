import styles from "../styles.module.css";
import useDashboard from "../../../hooks/useDashboard";
import { chartModes } from "../utils";

const ModeSelector = ({ currentMode, setCurrentMode }) => {
  return (
    <div>
      <div className={styles.modeSelector}>
        {chartModes.map((item) => {
          const isCurrentMode = currentMode === item;
          return (
            <p
              onClick={() => {
                setCurrentMode(item);
              }}
              key={item}
              style={
                isCurrentMode
                  ? {
                      color: "#e02820",
                      fontWeight: 800,
                      cursor: "pointer",
                    }
                  : { color: "#000", fontWeight: 400, cursor: "pointer" }
              }
            >
              {item}
            </p>
          );
        })}
      </div>

      <div
        style={{
          width: "100%",
          border: "1px solid #f1f1f1",
          height: 2,
          background: "#f1f1f1",
        }}
      ></div>
    </div>
  );
};

export default ModeSelector;
