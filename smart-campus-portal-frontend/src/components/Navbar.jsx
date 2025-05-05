import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const linksByRole = {
    Student: [
      { to: '/student', label: 'Dashboard' },
      { to: '/book-room', label: 'Book Room' },
      { to: '/timetable', label: 'Timetable' },
      { to: '/report-issue', label: 'Report Issue' },
      { to: '/notifications', label: 'Notifications' }
    ],
    Lecturer: [
      { to: '/lecturer', label: 'Dashboard' },
      { to: '/timetable', label: 'Timetable' },
      { to: '/notifications', label: 'Notifications' }
    ],
    Admin: [
      { to: '/admin', label: 'Dashboard' },
      { to: '/admin-analytics', label: 'Analytics' },
      { to: '/notifications', label: 'Notifications' }
    ]
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        {linksByRole[user.role].map(link => (
          <Link key={link.to} to={link.to} className="hover:underline">{link.label}</Link>
        ))}
      </div>
      <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;