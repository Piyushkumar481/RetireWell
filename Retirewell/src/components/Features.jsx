// import styles from "./Features.module.css"
// import piggy from "../assets/piggy.svg"
// import target from "../assets/target.svg"
// import investment from "../assets/investment.svg"
// import reminder from "../assets/reminder.svg"

// function Features(){
//   return(
//     <>
//     <div className={styles.featurebox}>
//       <div className={styles.heading}>
//       <h2>Plan your retirement with ease using our smart tools!</h2>
//       </div>
//       <div className={styles.boxes}>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={piggy} alt="Piggy Bank Icon"></img>
//       <h3>Track Savings Efficiently💡</h3>
//       <p>Stay on top of your retirement savings! Monitor your savings in real-time and visualize how small contributions today can lead to a secure future.</p>
//       </div>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={target} alt="Target Icon"></img>
//       <h3>Set Personalized Goals💡</h3>
//       <p>Define your dream retirement lifestyle! Set financial goals based on your income, desired retirement age, and future expenses.</p>
//       </div>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={investment} alt="Investment Icon"></img>
//       <h3>Smart Investment Insights💡</h3>
//       <p>Receive personalized recommendations on how to optimize your savings and investments for maximum returns.</p>
//       </div>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={reminder} alt="Reminder Icon"></img>
//       <h3>Reminders & Progress Tracking💡</h3>
//       <p>Never miss a milestone! Get smart alerts and progress reports to stay on track with your financial goals.</p>
//       </div>
//       </div>
//     </div>

//     </>
//   )
// }

// export default Features

// import styles from "./Features.module.css"
// import piggy from "../assets/piggy.svg"
// import target from "../assets/target.svg"
// import investment from "../assets/investment.svg"
// import reminder from "../assets/reminder.svg"

// function Features(){
//   return(
//     <>
//     <div className={styles.featurebox}>
//       <div className={styles.heading}>
//       <h2>Plan your retirement with ease using our smart tools!</h2>
//       </div>
//       <div className={styles.boxes}>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={piggy} alt="Piggy Bank Icon"></img>
//       <h3>Track Savings Efficiently💡</h3>
//       <p>Stay on top of your retirement savings! Monitor your savings in real-time and visualize how small contributions today can lead to a secure future.</p>
//       </div>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={target} alt="Target Icon"></img>
//       <h3>Set Personalized Goals💡</h3>
//       <p>Define your dream retirement lifestyle! Set financial goals based on your income, desired retirement age, and future expenses.</p>
//       </div>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={investment} alt="Investment Icon"></img>
//       <h3>Smart Investment Insights💡</h3>
//       <p>Receive personalized recommendations on how to optimize your savings and investments for maximum returns.</p>
//       </div>
//       <div className={styles.box} data-aos="fade-in">
//       <img src={reminder} alt="Reminder Icon"></img>
//       <h3>Reminders & Progress Tracking💡</h3>
//       <p>Never miss a milestone! Get smart alerts and progress reports to stay on track with your financial goals.</p>
//       </div>
//       </div>
//     </div>

//     </>
//   )
// }

// export default Features


import styles from "./Features.module.css";
import piggy from "../assets/piggy.svg";
import target from "../assets/target.svg";
import investment from "../assets/investment.svg";
import reminder from "../assets/reminder.svg";

function Features() {
  const featuresData = [
    {
      img: piggy,
      title: "Track Savings Efficiently",
      desc: "Monitor your savings in real-time. See how small contributions today lead to a secure future.",
    },
    {
      img: target,
      title: "Set Personalized Goals",
      desc: "Define your retirement lifestyle! Set goals based on income, age, and expenses.",
    },
    {
      img: investment,
      title: "Smart Investment Insights",
      desc: "Get personalized tips to optimize your savings and maximize returns.",
    },
    {
      img: reminder,
      title: "Reminders & Tracking",
      desc: "Never miss a milestone! Get smart alerts to stay on track.",
    },
  ];

  return (
    <div className={styles.featurebox}>
      <h2 className={styles.heading}>Plan your retirement with ease using our smart tools!</h2>
      <div className={styles.flipCardContainer}>
        {featuresData.map((item, index) => (
          <div className={styles.flipCard} key={index}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={styles.flipCardBack}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
