import { useState } from 'react';
import axios from 'axios';
import StudentList from '../components/StudentList';
import Loader from '../components/Loader';

const Students = () => {
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!course || !batch) {
      setError('Course and Batch fields are required.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      let response;
      const baseUrl = process.env.REACT_APP_API; // Accessing .env variable
      console.log(baseUrl)

      if (specialization) {
        response = await axios.get(`${baseUrl}/students/${course}/${batch}/specialization/${specialization}`);
      } else {
        response = await axios.get(`${baseUrl}/students/${course}/${batch}`);
      }

      setStudents(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching students. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-extrabold mb-4">Students</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="" disabled>Select Course</option>
          <option value="B.Sc. CS">B.Sc. CS</option>
          <option value="B.Sc.">B.Sc.</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          required
        >
          <option value="" disabled>Select Batch</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="" disabled>Select Specialization</option>
            <option value="Core">Core</option>
            <option value="Data Science">Data Science</option>
          </select>
          <p className="text-xs flex justify-end pe-2">optional*</p>
        </div>
      </div>

      <button
        className="btn btn-primary w-auto px-6 rounded-xl mt-4"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? <span className="flex items-center justify-center">Loading...</span> : 'Search'}
      </button>

      {loading && !error && <Loader />}

      {error ? <p className="text-red-500 mt-4">{error}</p> :
        students.length > 0 && !loading && <StudentList students={students} />}
    </div>
  );
};

export default Students;
