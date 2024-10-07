import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";


export const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme('dark');
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <button className="p-3 m-5 bg-gray-200 dark:bg-dark-base-menu rounded-full" onClick={() => toggleTheme()}>
        {theme === 'light' ? <IoMoon /> : <IoSunny className="text-white"/>}
      </button>
    </>
  )
}