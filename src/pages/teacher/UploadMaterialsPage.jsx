import { useState } from 'react';

const UploadMaterialsPage = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="glass-card p-6 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Upload Materials</h2>
      <p className="text-slate-300 mt-1">Add video, documents and resources for students.</p>
      <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} className="mt-4" />
      <button className="btn-primary mt-3" onClick={() => alert('Materials uploaded (mock)')}>Upload</button>
      <ul className="mt-4 list-disc pl-6 text-sm text-slate-300">{files.map((f) => <li key={f.name}>{f.name}</li>)}</ul>
    </div>
  );
};

export default UploadMaterialsPage;
