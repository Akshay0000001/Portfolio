// pages/index.js
import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from './page.module.css';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="about" className={styles.section}>
          <h2 className={styles.heading}>About Me</h2><br></br>
          <p className={styles.text}>
            Hello! I’m Akshay, a passionate front-end developer with expertise in React and JavaScript.
            I’m dedicated to creating responsive, user-friendly websites and web applications.
          </p>
        </section>
        <Projects />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
