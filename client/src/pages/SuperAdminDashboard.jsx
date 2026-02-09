import axios from 'axios';
import { useState } from 'react';

export default function SuperAdminDashboard() {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleCreate = async () => {
    const token = localStorage.getItem('token');

    await axios.post(
      'http://localhost:5000/api/admin/create-admin',
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert('Admin Created');
  };

  return (
    <div className="p-10 space-y-3">
      <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
      <Navbar />

      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} className="border p-2"/>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} className="border p-2"/>
      <input placeholder="Password" onChange={e => setData({...data, password: e.target.value})} className="border p-2"/>

      <button onClick={handleCreate} className="bg-green-500 text-white px-4 py-2">
        Create Admin
      </button>
    </div>
  );
}
