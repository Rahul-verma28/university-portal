import React, { useState } from 'react';
import FilterComponent from '../components/FilterComponent';
import { Link } from 'react-router-dom';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  const handleFilter = (filters) => {
    // Filter logic to fetch and update students based on filters
    // setStudents(filteredStudents);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Students</h2>
      <FilterComponent onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {students.map(student => (
          <Link key={student.id} to={`/students/${student.id}`} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p>{student.course}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
