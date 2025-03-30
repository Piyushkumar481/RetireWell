import React from "react";
import styles from "./BubblesBackground.module.css";

const COLORS = ["#DCF2F1", "#7FC7D9", "#0F1035"];

const BubblesBackground = () => {
  return (
    <div className={styles.bubbles}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i} className={styles.bubble} style={{
          width: 10,
          height: 10,
          left: `${Math.random() * 100}%`, 
          opacity: `${Math.random()}`, 
          backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
          animationDuration: `${Math.random() * 6 + 5}s`,
        }}></div>
      ))}
    </div>
  );
};

export default BubblesBackground;
