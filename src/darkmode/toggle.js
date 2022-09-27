import React from 'react';
import { ThemeContext } from './themeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mt-3 text-gray-300 shadow-none focus:outline-none text-lg  outline-none ring-transparent cursor-pointer"
        >
                   <span style={{ color: theme ? "grey" : "grey" }}>☽</span>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mt-3 focus:outline-none shadow-none text-lg  outline-none ring-transparent cursor-pointer"
        >
           <span style={{ color: theme ? "orange" : "orange" }}>☀︎</span>
        </button>
      )}
    </div>
  );
};

export default Toggle;
