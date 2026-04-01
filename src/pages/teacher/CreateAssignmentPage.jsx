import { useState } from 'react';

const CreateAssignmentPage = () => {
  const [assignment, setAssignment] = useState({ title: '', due: '' });

  return (
    <div className="glass-card p-6 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Create Assignment</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Assignment created'); setAssignment({ title: '', due: '' }); }} className="mt-4 space-y-3">
        <input value={assignment.title} onChange={(e) => setAssignment((a) => ({ ...a, title: e.target.value }))} placeholder="Title" className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" required />
        <input value={assignment.due} onChange={(e) => setAssignment((a) => ({ ...a, due: e.target.value }))} type="date" className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" required />
        <button className="btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateAssignmentPage;
