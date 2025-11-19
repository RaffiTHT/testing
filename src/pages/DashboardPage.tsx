import { useState } from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import UserTable from '../components/UserTable';
import type { User } from '../types/user';
import './Dashboard.css';

interface DashboardPageProps {
  userName: string;
  onLogout: () => void;
}

function DashboardPage({ userName, onLogout }: DashboardPageProps) {
  // Mock data (senare hämtar vi detta från API)
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Raffi', email: 'raffimedz@trollhattan.se' },
    { id: 2, name: 'Anna Andersson', email: 'anna@example.se' },
    { id: 3, name: 'Erik Eriksson', email: 'erik@example.se' },
    { id: 4, name: 'Sara Svensson', email: 'sara@example.se' },
  ]);

  const handleDeleteUser = (userId: number) => {
    if (window.confirm('Är du säker på att du vill ta bort denna användare?')) {
      setUsers(users.filter(user => user.id !== userId));
      alert('Användare borttagen!');
    }
  };

  const stats = {
    totalUsers: users.length,
    activeUsers: users.length,
    newToday: 2,
  };

  return (
    <div className="dashboard">
      <Navbar userName={userName} onLogout={onLogout} />
      
      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Välkommen tillbaka, {userName}! 👋</h1>
          <p>Här är en översikt av ditt system</p>
        </div>

        <div className="stats-grid">
          <StatCard
            title="Totalt Användare"
            value={stats.totalUsers}
            icon="👥"
            color="#667eea"
          />
          <StatCard
            title="Aktiva Användare"
            value={stats.activeUsers}
            icon="✅"
            color="#48bb78"
          />
          <StatCard
            title="Nya idag"
            value={stats.newToday}
            icon="🆕"
            color="#ed8936"
          />
        </div>

        <UserTable users={users} onDeleteUser={handleDeleteUser} />
      </div>
    </div>
  );
}

export default DashboardPage;
