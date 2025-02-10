// components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Akshay. All rights reserved.</p>
      <p>
        <a href="https://github.com/Akshay0000001/" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://wa.me/+919746570611" target="_blank" rel="noopener noreferrer">  WhatsApp</a>
      </p>
    </footer>
  );
}
