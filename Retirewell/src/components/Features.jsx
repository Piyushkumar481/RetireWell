import styles from "./Features.module.css"
import piggy from "../assets/piggy.svg"
import target from "../assets/target.svg"
import investment from "../assets/investment.svg"
import reminder from "../assets/reminder.svg"

function Features(){
  return(
    <>
    <div className={styles.featurebox}>
      <div className={styles.heading}>
      <h2>Plan your retirement with ease using our smart tools!</h2>
      </div>
      <div className={styles.boxes}>
      <div className={styles.box} data-aos="fade-in">
      <img src={piggy} alt="Piggy Bank Icon"></img>
      <h3>Track Savings Efficiently💡</h3>
      <p>Stay on top of your retirement savings! Monitor your savings in real-time and visualize how small contributions today can lead to a secure future.</p>
      </div>
      <div className={styles.box} data-aos="fade-in">
      <img src={target} alt="Target Icon"></img>
      <h3>Set Personalized Goals💡</h3>
      <p>Define your dream retirement lifestyle! Set financial goals based on your income, desired retirement age, and future expenses.</p>
      </div>
      <div className={styles.box} data-aos="fade-in">
      <img src={investment} alt="Investment Icon"></img>
      <h3>Smart Investment Insights💡</h3>
      <p>Receive personalized recommendations on how to optimize your savings and investments for maximum returns.</p>
      </div>
      <div className={styles.box} data-aos="fade-in">
      <img src={reminder} alt="Reminder Icon"></img>
      <h3>Reminders & Progress Tracking💡</h3>
      <p>Never miss a milestone! Get smart alerts and progress reports to stay on track with your financial goals.</p>
      </div>
      </div>
    </div>

    </>
  )
}

export default Features