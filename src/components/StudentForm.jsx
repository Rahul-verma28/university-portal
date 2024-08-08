import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    session: '',
    course: '',
    semester: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState, 
      [name]: value 
    }));
  };

  const handleSubmit = () => {
    // Logic to add or update student
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Add/Update Student</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <input
        type="text"
        name="session"
        placeholder="Session"
        value={student.session}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <input
        type="text"
        name="semester"
        placeholder="Semester"
        value={student.semester}
        onChange={handleChange}
        className="mb-4 px-4 py-2 rounded-lg border w-full"
      />
      <button onClick={handleSubmit} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md w-full">
        Submit
      </button>
    </div>
  );
};

export default StudentForm;
