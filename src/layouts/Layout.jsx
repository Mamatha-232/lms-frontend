import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../routes/AuthContext';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Layout = ({ children, darkMode, setDarkMode }) => {
  const auth = useAuth();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-slate-100' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 text-slate-900'}`}>
      <header className="sticky top-0 z-40 backdrop-blur-xl glass-card border-b border-white/10 p-4">
        <div className="mx-auto flex items-center justify-between max-w-7xl gap-4">
          <Link to="/" className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            EduBoost LMS
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="px-3 py-1 rounded-md border border-white/20 focus:outline-none hover:bg-white/10">
              {darkMode ? '☀️' : '🌙'}
            </button>
            {auth.isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm">{auth.user.name} ({auth.user.role})</span>
                <button onClick={auth.logout} className="text-sm text-red-400 hover:text-red-300">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="text-sm hover:text-indigo-300">Login</Link>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 md:p-6 flex gap-4 items-start">
        {auth.isAuthenticated && <Sidebar role={auth.user.role} />}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1"
        >
          {children}
        </motion.section>
      </main>

      <footer className={`text-center py-6 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>© 2026 MRLMS. All rights reserved.</footer>
    </div>
  );
};

export default Layout;
