const ResultsPage = () => (
  <div className="glass-card p-6 rounded-3xl">
    <h2 className="text-3xl font-bold">Results</h2>
    <div className="mt-4 grid md:grid-cols-3 gap-4">
      <div className="p-4 neu-card rounded-xl">Completed Assignments: 8/10</div>
      <div className="p-4 neu-card rounded-xl">Average Quiz: 82%</div>
      <div className="p-4 neu-card rounded-xl">Overall Progress: 56%</div>
    </div>
  </div>
);

export default ResultsPage;
