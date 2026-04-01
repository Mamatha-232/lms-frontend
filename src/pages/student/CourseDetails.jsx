import { useParams, Link } from 'react-router-dom';
import { courses } from '../../data/mockData';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];

  return (
    <div className="glass-card p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">{course.title}</h2>
      <p className="text-slate-300 mt-2">{course.description}</p>
      <div className="mt-4 space-y-2">
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <p>Rating: {course.rating}</p>
      </div>
      <div className="mt-4 flex gap-3">
        <Link to={`/student/video/${course.id}`} className="btn-primary">Start Video</Link>
        <Link to="/student/assignments" className="btn-secondary">Assignments</Link>
      </div>
    </div>
  );
};

export default CourseDetails;
