import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import './LoginForm.css';

interface LoginPageProps {
  onLoginSuccess: (userName: string) => void;
}

function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Login attempt:', { email, password });
      
      // Simulera API-anrop
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulera lyckad inloggning
      if (email === 'raffimedz@trollhattan.se' && password === 'test123') {
        onLoginSuccess('Raffi');
      } else {
        setError('Fel email eller lösenord');
      }
    } catch (err) {
      setError('Något gick fel. Försök igen.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginForm 
      onLogin={handleLogin}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default LoginPage;
