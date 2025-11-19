import './Navbar.css';

interface NavbarProps {
  userName: string;
  onLogout: () => void;
}

function Navbar({ userName, onLogout }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-logo">🚀 Dashboard</h1>
        </div>
        
        <div className="navbar-right">
          <span className="user-greeting">Hej, {userName}!</span>
          <button onClick={onLogout} className="logout-button">
            Logga ut
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;