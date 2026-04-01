import { useState, useEffect } from 'react';
import { quizzes } from '../../data/mockData';

const sampleQuestions = [
  { q: 'What is React?', options: ['Library', 'Framework', 'Language', 'IDE'], answer: 0 },
  { q: 'What hook manages state?', options: ['useEffect', 'useState', 'useMemo', 'useRef'], answer: 1 },
];

const QuizPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (selected === sampleQuestions[questionIndex].answer) setScore((s) => s + 1);
    setSelected(null);
    setQuestionIndex((i) => Math.min(i + 1, sampleQuestions.length - 1));
  };

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">Quiz</h2>
      <p className="text-slate-300 mt-1">Timer: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
      <div className="mt-6">
        <p className="font-semibold">{sampleQuestions[questionIndex].q}</p>
        <div className="mt-3 space-y-2">
          {sampleQuestions[questionIndex].options.map((opt, idx) => (
            <button key={idx} onClick={() => setSelected(idx)} className={`w-full text-left rounded-lg p-3 border ${selected === idx ? 'border-indigo-400 bg-indigo-500/20' : 'border-white/10'}`}>
              {opt}
            </button>
          ))}
        </div>
        <button onClick={handleNext} className="btn-primary mt-4">Next</button>
      </div>
      <div className="mt-5">Score: {score}</div>
      <div className="mt-2">Available quizzes: {quizzes.map((q) => q.title).join(', ')}</div>
    </div>
  );
};

export default QuizPage;
