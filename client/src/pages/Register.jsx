import axios from 'axios';
import { useState } from 'react';

export default function Register() {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    await axios.post('http://localhost:5000/api/auth/register', {
      ...data,
      role: 'user'
    });

    alert('User Registered');
  };

  return (
    <div className="p-10 space-y-3">
      <h1 className="text-2xl font-bold">User Registration</h1>

      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} className="border p-2"/>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} className="border p-2"/>
      <input placeholder="Password" onChange={e => setData({...data, password: e.target.value})} className="border p-2"/>

      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2">
        Register
      </button>
    </div>
  );
}
