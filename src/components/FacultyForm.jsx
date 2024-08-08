import React, { useState } from 'react';

const FacultyForm = () => {
  const [faculty, setFaculty] = useState({
    name: '',
    department: '',
    designation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty(prevState => ({
      ...prevState, 
      [name]: value 
    }));
  };

  const handleSubmit = () => {
    // Logic to add or update faculty
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Add/Update Faculty</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={faculty.name}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={faculty.department}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={faculty.designation}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <button onClick={handleSubmit} className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md w-full">
        Submit
      </button>
    </div>
  );
};

export default FacultyForm;
