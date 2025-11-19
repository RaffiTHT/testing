import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLoginSuccess = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    if (window.confirm('Är du säker på att du vill logga ut?')) {
      setIsLoggedIn(false);
      setUserName('');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage userName={userName} onLogout={handleLogout} />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}


export default App;