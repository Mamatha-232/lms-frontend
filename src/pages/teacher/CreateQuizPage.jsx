import { useState } from 'react';

const CreateQuizPage = () => {
  const [quiz, setQuiz] = useState({ title: '', questions: 5 });

  return (
    <div className="glass-card p-6 rounded-3xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Create Quiz</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Quiz created: ' + quiz.title); setQuiz({ title: '', questions: 5 }); }} className="mt-4 space-y-3">
        <input value={quiz.title} onChange={(e) => setQuiz((q) => ({ ...q, title: e.target.value }))} placeholder="Quiz Title" className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" required />
        <input type="number" value={quiz.questions} onChange={(e) => setQuiz((q) => ({ ...q, questions: Number(e.target.value) }))} min={1} className="w-full rounded-xl border border-white/10 p-3 bg-slate-900" />
        <button className="btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateQuizPage;
