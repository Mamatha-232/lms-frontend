import { assignments } from '../../data/mockData';
import { Link } from 'react-router-dom';

const AssignmentsPage = () => (
  <div className="glass-card p-6 rounded-3xl">
    <h2 className="text-3xl font-bold">Assignments</h2>
    <ul className="mt-4 space-y-3">
      {assignments.map((a) => (
        <li key={a.id} className="neu-card p-4 rounded-xl flex justify-between items-center">
          <div>
            <p className="font-semibold">{a.title}</p>
            <p className="text-xs text-slate-400">Due: {a.due}</p>
          </div>
          <Link to="/student/submit" className="text-indigo-300 hover:underline">Submit</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AssignmentsPage;
