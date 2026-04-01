import { useState } from 'react';
import { useAuth } from '../routes/AuthContext';

const ProfilePage = () => {
  const auth = useAuth();
  const [name, setName] = useState(auth.user.name);
  const [email, setEmail] = useState(auth.user.email);

  const handleSave = (e) => {
    e.preventDefault();
    auth.updateProfile({ name, email });
    alert('Profile updated!');
  };

  return (
    <div className="glass-card p-8 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Profile</h2>
      <p className="text-slate-600 dark:text-slate-300 mt-1">Edit your user information.</p>
      <form onSubmit={handleSave} className="mt-6 space-y-4">
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" />
        <button className="btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ProfilePage;
