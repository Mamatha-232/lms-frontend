import { assignments } from '../../data/mockData';

const StudentSubmissionsPage = () => {
  const handleReview = (assignment) => {
    alert(`Review submission for: ${assignment.title}`);
  };

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Student Submissions</h2>
      <div className="mt-4 space-y-3">
        {assignments.map((a) => (
          <div key={a.id} className="neu-card p-4 rounded-xl flex justify-between items-center">
            <div>
              <p className="font-semibold">{a.title}</p>
              <p className="text-slate-400 text-sm">Due: {a.due}</p>
            </div>
            <button onClick={() => handleReview(a)} className="btn-secondary">Review</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSubmissionsPage;
