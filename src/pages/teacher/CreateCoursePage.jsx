import { useState } from 'react';

const CreateCoursePage = () => {
  const [course, setCourse] = useState({ title: '', description: '', duration: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course created: ${course.title}`);
    setCourse({ title: '', description: '', duration: '' });
  };

  return (
    <div className="glass-card p-6 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Create Course</h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input value={course.title} onChange={(e) => setCourse((c) => ({ ...c, title: e.target.value }))} placeholder="Course Title" className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" required />
        <textarea value={course.description} onChange={(e) => setCourse((c) => ({ ...c, description: e.target.value }))} placeholder="Description" className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" required />
        <input value={course.duration} onChange={(e) => setCourse((c) => ({ ...c, duration: e.target.value }))} placeholder="Duration" className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" required />
        <button className="btn-primary">Publish Course</button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
