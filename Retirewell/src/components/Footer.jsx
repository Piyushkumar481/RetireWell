import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.navSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.logoSection}>
          <h2>RetireWell</h2>
          <p>Smart savings for a brighter future.</p>
        </div>

        <div className={styles.socialSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 RetireWell. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
