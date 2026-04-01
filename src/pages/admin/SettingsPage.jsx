import { useState } from 'react';
import { useAuth } from '../../routes/AuthContext';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [notification, setNotification] = useState(true);
  const [autoEnroll, setAutoEnroll] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSave = () => {
    alert('Settings saved!');
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <div className="glass-card p-6 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Settings</h2>
      <div className="mt-5 space-y-4">
        <label className="flex items-center justify-between">
          <span>Notifications</span>
          <input type="checkbox" checked={notification} onChange={(e) => setNotification(e.target.checked)} />
        </label>
        <label className="flex items-center justify-between">
          <span>Auto-enroll students</span>
          <input type="checkbox" checked={autoEnroll} onChange={(e) => setAutoEnroll(e.target.checked)} />
        </label>
      </div>
      <div className="mt-6 space-y-3">
        <button onClick={handleSave} className="btn-primary w-full">Save Settings</button>
        <button onClick={handleLogout} className="btn-secondary w-full">Logout</button>
      </div>
    </div>
  );
};

export default SettingsPage;
