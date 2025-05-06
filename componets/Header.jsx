import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';

export default function Header() {
  const [dark, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDarkMode(!dark);
  };
  
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <button className="theme-changer" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={faMoon} />
          &nbsp;&nbsp;{dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}
