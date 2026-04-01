import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../routes/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = auth.login({ email, password, role, name: role[0].toUpperCase() + role.slice(1) });
    if (user) {
      navigate(`/${role}`);
    }
  };

  return (
    <div className="glass-card max-w-md mx-auto p-8 rounded-3xl mt-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Login</h2>
      <p className="text-slate-600 dark:text-slate-300 mt-2">Role-based login for student, teacher or admin.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" required />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="btn-primary w-full">Login</button>
      </form>
      <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        <a href="/forgot-password" className="text-indigo-600 dark:text-indigo-300 hover:underline">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
