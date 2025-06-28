import React from 'react';
import { useAuth } from '../Authentication/Authentication';

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [edit, setEdit] = React.useState(false);
  const [form, setForm] = React.useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
    setEdit(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col items-center">
        <img
          src={form.avatar || '/User Image.jpeg'}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-orange-200 shadow mb-4"
        />
        {edit ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email"
              required
              disabled
            />
            <input
              type="text"
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Avatar URL"
            />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">Save</button>
            <button type="button" onClick={() => setEdit(false)} className="text-orange-500 hover:underline">Cancel</button>
          </form>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-orange-700 mb-2">{user?.name}</h2>
            <p className="text-gray-600 mb-2">{user?.email}</p>
            <button onClick={() => setEdit(true)} className="bg-orange-100 text-orange-700 px-6 py-2 rounded-full font-semibold hover:bg-orange-200 transition mt-4">Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}
