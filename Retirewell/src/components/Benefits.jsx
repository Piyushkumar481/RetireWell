import styles from './Benefits.module.css';
import { useNavigate } from 'react-router-dom';

function Benefits() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };
  return (
    <section className={styles.benefits}>
      <div className={styles.leftContent}>
        <h2>Why Use This?</h2>
        <button onClick={handleGetStarted}>Get started!</button>
      </div>

      <div className={styles.benefitsBubbles}>
        <div className={styles.bubble} data-aos="flip-right">
          <h3>Achieve Financial Freedom</h3>
          <p>Secure your future and retire comfortably without financial worries.</p>
        </div>

        <div className={styles.bubble} data-aos="flip-right">
          <h3>Make Informed Decisions</h3>
          <p>Get expert-backed insights to better plan your savings and investments.</p>
        </div>

        <div className={styles.bubble} data-aos="flip-right">
          <h3>Secure & Private</h3>
          <p>We use bank-level encryption to keep your financial data safe.</p>
        </div>

        <div className={styles.bubble} data-aos="flip-right">
          <h3>Simple & User-Friendly</h3>
          <p>Track savings and set goals effortlessly with an intuitive interface.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
