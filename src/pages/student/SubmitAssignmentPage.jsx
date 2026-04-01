import { useState } from 'react';

const SubmitAssignmentPage = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="glass-card p-6 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Submit Assignment</h2>
      <p className="text-slate-300 mt-2">Upload your assignment file here.</p>
      <form className="mt-5 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Submitted!'); }}>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0])} className="w-full" />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
      {file && <p className="text-sm text-slate-300 mt-2">Selected: {file.name}</p>}
    </div>
  );
};

export default SubmitAssignmentPage;
