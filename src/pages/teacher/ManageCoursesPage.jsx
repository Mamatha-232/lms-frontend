import { courses } from '../../data/mockData';

const ManageCoursesPage = () => {
  const handleEdit = (course) => {
    alert(`Edit course: ${course.title}`);
  };

  const handleDelete = (course) => {
    alert(`Delete course: ${course.title}? (mock)`);
  };

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Manage Courses</h2>
      <div className="mt-5 grid md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <div key={c.id} className="neu-card p-4 rounded-xl">
            <h4 className="font-semibold">{c.title}</h4>
            <p className="text-sm text-slate-400">{c.instructor}</p>
            <div className="mt-2 flex gap-2">
              <button onClick={() => handleEdit(c)} className="btn-primary text-xs">Edit</button>
              <button onClick={() => handleDelete(c)} className="btn-secondary text-xs">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCoursesPage;
