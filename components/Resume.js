import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <h2>My Resume</h2>
      <p>View online or download my resume.</p>

      {/* View Resume Online */}
      <a 
        href="/Akshay_Resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.viewButton}
      >
        📄 View Resume
      </a>

      {/* Download Resume */}
      <a 
        href="/Akshay_Resume.pdf" 
        download="Akshay_Resume.pdf" 
        className={styles.downloadButton}
      >
        ⬇️ Download Resume
      </a>
    </section>
  );
}
