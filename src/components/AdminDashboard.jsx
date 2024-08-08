import React from 'react';
import StudentForm from '../components/StudentForm';
import FacultyForm from '../components/FacultyForm';

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StudentForm />
        <FacultyForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
