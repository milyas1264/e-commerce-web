import Navbar from '../components/Navbar';

import axios from 'axios';
import { useEffect, useState } from 'react';

  function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');

    const res = await axios.get(
      'http://localhost:5000/api/admin/users',
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    const token = localStorage.getItem('token');

    await axios.delete(
      `http://localhost:5000/api/admin/users/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchUsers();
  };

  useEffect(() => {
    (async () => {
      await fetchUsers();
    })();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {users.map(user => (
        <div key={user._id} className="flex justify-between border p-2 mb-2">
          <span>{user.name} - {user.email}</span>
          <button
            onClick={() => deleteUser(user._id)}
            className="bg-red-500 text-white px-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}


export default AdminDashboard;