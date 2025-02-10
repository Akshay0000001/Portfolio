// components/Header.js
"use client"; // This directive marks the component as a client component

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">AKSHAY PK</Link>
        </div>
        <div className={styles.togg}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
            <ul>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;