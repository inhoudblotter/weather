import {useEffect, useState} from 'react';
import {SwitchButton} from '../../ui/SwitchButton';
import './ThemeSwitch.css';

export function ThemeSwitch() {
  let [theme, setTheme] = useState('light');

  useEffect(() => {
    let saveTheme = window.localStorage.getItem('theme');
    if (!saveTheme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('#root').classList.add('dark-theme');
        window.localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else window.localStorage.setItem('theme', 'light');
    } else if (saveTheme === 'dark') {
      document.querySelector('#root').classList.add('dark-theme');
      setTheme('dark');
    }
  }, []);

  function switchTheme() {
    if (theme === 'light') {
      setTheme('dark');
      document.querySelector('#root').classList.add('dark-theme');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.querySelector('#root').classList.remove('dark-theme');
      window.localStorage.setItem('theme', 'light');
    }
  }
  return <SwitchButton blockName={'theme-switch'} icon={'moon'} onChange={switchTheme} />;
}
