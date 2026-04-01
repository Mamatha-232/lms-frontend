import { users } from '../../data/mockData';

const ManageUsersPage = () => {
  const handleEdit = (user) => {
    alert(`Edit user: ${user.name}`);
  };

  const handleDelete = (user) => {
    alert(`Delete user: ${user.name}? (mock)`);
  };

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Manage Users</h2>
      <div className="mt-4 space-y-2">
        {users.map((user) => (
          <div key={user.id} className="neu-card p-3 rounded-xl flex justify-between">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-slate-400">{user.email} • {user.role}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(user)} className="btn-secondary text-xs">Edit</button>
              <button onClick={() => handleDelete(user)} className="btn-secondary text-xs">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsersPage;
