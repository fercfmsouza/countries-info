import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetailPage from './pages/CountryDetailPage';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path='/countries-info' element={<HomePage theme={theme} />} />
          <Route
            path='/country/:countryId'
            element={<CountryDetailPage theme={theme} />}
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
