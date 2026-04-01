import { NavLink } from 'react-router-dom';

const items = {
  student: [
    { label: 'Overview', to: '/student' },
    { label: 'Courses', to: '/student/courses' },
    { label: 'Assignments', to: '/student/assignments' },
    { label: 'Quizzes', to: '/student/quiz' },
    { label: 'Results', to: '/student/results' },
  ],
  teacher: [
    { label: 'Overview', to: '/teacher' },
    { label: 'Create Course', to: '/teacher/create-course' },
    { label: 'Manage Courses', to: '/teacher/manage-courses' },
    { label: 'Upload Materials', to: '/teacher/upload-materials' },
    { label: 'Submissions', to: '/teacher/submissions' },
  ],
  admin: [
    { label: 'Dashboard', to: '/admin' },
    { label: 'Manage Users', to: '/admin/manage-users' },
    { label: 'Manage Courses', to: '/admin/manage-courses' },
    { label: 'Analytics', to: '/admin/analytics' },
    { label: 'Settings', to: '/admin/settings' },
  ],
};

const Sidebar = ({ role }) => {
  const list = items[role] || [];
  return (
    <aside className="hidden md:block w-64 glass-card rounded-2xl p-4">
      <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">{role} panel</h3>
      <ul className="flex flex-col gap-2">
        {list.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm transition ${
                  isActive ? 'bg-indigo-500/25 text-indigo-200' : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
