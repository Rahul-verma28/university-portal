import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [session, setSession] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');

  const handleFilterClick = () => {
    onFilter({ session, course, semester });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Session"
          value={session}
          onChange={(e) => setSession(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        />
        <input
          type="text"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        />
      </div>
      <button onClick={handleFilterClick} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md">
        Filter
      </button>
    </div>
  );
};

export default FilterComponent;
