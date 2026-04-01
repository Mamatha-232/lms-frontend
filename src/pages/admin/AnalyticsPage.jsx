import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'UI', value: 24 },
  { name: 'Backend', value: 40 },
  { name: 'Data', value: 19 },
  { name: 'Design', value: 33 },
];

const AnalyticsPage = () => (
  <div className="glass-card p-6 rounded-3xl">
    <h2 className="text-3xl font-bold">Analytics</h2>
    <div className="mt-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#a5b4fc" />
          <YAxis stroke="#a5b4fc" />
          <Tooltip />
          <Bar dataKey="value" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AnalyticsPage;
