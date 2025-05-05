import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, role);
    } else {
      alert('Please enter all fields.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select className="w-full p-2 mb-4 border" value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Student</option>
          <option>Lecturer</option>
          <option>Admin</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;