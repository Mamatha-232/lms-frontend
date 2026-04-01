import { courses } from '../../data/mockData';

const ManageCoursesPage = () => {
  const handleApprove = (course) => {
    alert(`Approve course: ${course.title}`);
  };

  const handleRemove = (course) => {
    alert(`Remove course: ${course.title}? (mock)`);
  };

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Admin Manage Courses</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="neu-card p-4 rounded-xl">
            <p className="font-semibold">{course.title}</p>
            <p className="text-xs text-slate-400">Instructor: {course.instructor}</p>
            <div className="mt-2 space-x-2">
              <button onClick={() => handleApprove(course)} className="btn-secondary text-xs">Approve</button>
              <button onClick={() => handleRemove(course)} className="btn-secondary text-xs">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCoursesPage;
