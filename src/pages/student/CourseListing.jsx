import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/mockData';

const CourseListing = () => {
  const [term, setTerm] = useState('');
  const filtered = courses.filter((c) => c.title.toLowerCase().includes(term.toLowerCase()) || c.instructor.toLowerCase().includes(term.toLowerCase()));

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Courses</h2>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search courses" className="mt-4 w-full rounded-xl border border-white/10 p-3 bg-slate-900" />
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        {filtered.map((course) => (
          <div key={course.id} className="glass-card p-4 rounded-xl">
            <h4 className="font-bold">{course.title}</h4>
            <p className="text-sm text-slate-300">{course.description}</p>
            <p className="text-xs mt-1">Instructor: {course.instructor}</p>
            <Link to={`/student/course/${course.id}`} className="text-indigo-300 hover:underline text-sm">Explore</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
