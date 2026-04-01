import { users, courses } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', users: 40, courses: 10 },
  { name: 'Week 2', users: 75, courses: 14 },
  { name: 'Week 3', users: 110, courses: 18 },
  { name: 'Week 4', users: 155, courses: 22 },
];

const AdminDashboard = () => (
  <div className="space-y-6">
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Admin Overview</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="neu-card p-4 rounded-xl">Total Users: {users.length}</div>
        <div className="neu-card p-4 rounded-xl">Total Courses: {courses.length}</div>
        <div className="neu-card p-4 rounded-xl">Active: 156</div>
      </div>
    </div>
    <div className="glass-card p-6 rounded-3xl">
      <h3 className="text-xl font-semibold mb-4">Growth Analytics</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#a5b4fc" />
            <YAxis stroke="#a5b4fc" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} />
            <Line type="monotone" dataKey="courses" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
