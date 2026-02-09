import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <h1>Dashboard</h1>
      <button onClick={logout} className="bg-red-500 px-3">Logout</button>
    </div>
  );
}
