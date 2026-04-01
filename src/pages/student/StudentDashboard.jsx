import { Link } from 'react-router-dom';
import { courses, assignments } from '../../data/mockData';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  const enrolled = courses.slice(0, 3);
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Student Dashboard</h2>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Your learning overview</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="neu-card p-4 rounded-xl text-slate-900 dark:text-white">Courses Enrolled: {enrolled.length}</div>
          <div className="neu-card p-4 rounded-xl text-slate-900 dark:text-white">Assignments: {assignments.length}</div>
          <div className="neu-card p-4 rounded-xl text-slate-900 dark:text-white">Completed: 40%</div>
        </div>
      </div>
      <div className="glass-card p-6 rounded-3xl">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Assigned Courses</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {enrolled.map((course) => (
            <motion.div key={course.id} whileHover={{ y: -5 }} className="glass-card p-4 rounded-xl">
              <h4 className="font-bold text-slate-900 dark:text-white">{course.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{course.instructor}</p>
              <p className="text-xs mt-2 text-slate-600 dark:text-slate-300">Progress: {course.progress}%</p>
              <Link className="text-indigo-600 dark:text-indigo-300 hover:underline text-sm" to={`/student/course/${course.id}`}>View</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
