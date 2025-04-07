import styles from "./HeroComponent.module.css"
import Intro from "../assets/Intro.svg"
console.log("HeroComponent rendered");
import { useNavigate } from 'react-router-dom';




function HeroComponent(){
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };
  return (
    <>
      <div className={styles.header}>
        <h2>Retire<i><span className={styles.welltext}>Well</span></i></h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left} data-aos="slide-right"></div>
        <div className={styles.box} data-aos="slide-left">
        <div className={styles.right}>
          <h2>Retire Smart, Live Free: Your Future, Your Plan, Your Peace.</h2>
          <h4>Set goals, track savings, and secure your future with personalized insights.</h4>
          <button onClick={handleGetStarted}>
            Get started!
          </button>
        </div>
        </div>
      </div>
      
      
    </>
  )
}

export default HeroComponent