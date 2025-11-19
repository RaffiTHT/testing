import type { User } from '../types/user';
import './Usertable.css';

interface UserTableProps {
  users: User[];
  onDeleteUser: (userId: number) => void;
}

function UserTable({ users, onDeleteUser }: UserTableProps) {
  return (
    <div className="user-table-container">
      <h2 className="table-title">Användare</h2>
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Namn</th>
              <th>Email</th>
              <th>Åtgärder</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty-message">
                  Inga användare hittades
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => onDeleteUser(user.id)}
                      className="delete-button"
                    >
                      🗑️ Ta bort
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
