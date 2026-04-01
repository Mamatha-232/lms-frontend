import { Link } from 'react-router-dom';
import { courses } from '../../data/mockData';

const TeacherDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-3xl">
        <h2 className="text-3xl font-bold">Teacher Dashboard</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="neu-card p-4 rounded-xl">Courses: {courses.length}</div>
          <div className="neu-card p-4 rounded-xl">Submissions: 28</div>
          <div className="neu-card p-4 rounded-xl">New Enrollments: 12</div>
        </div>
      </div>
      <div className="glass-card p-6 rounded-3xl">
        <h3 className="text-xl font-semibold">Quick Actions</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link className="btn-primary" to="/teacher/create-course">Create Course</Link>
          <Link className="btn-secondary" to="/teacher/manage-courses">Manage Courses</Link>
          <Link className="btn-secondary" to="/teacher/submissions">Submissions</Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
