import { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    // Sort students alphabetically by name
    const sortedStudents = [...students].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    // Filter students based on the search query for name or enrollment number
    const filteredStudents = sortedStudents.filter(student => {
        return (
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.enrollment_no.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="overflow-x-auto pt-10 p-2">
            <div className='flex justify-between gap-2 items-center'>
                <p className="font-bold">Total Students - {filteredStudents.length}</p>
                <input
                    type="text"
                    placeholder="Search by Name or Enrollment No."
                    className="input input-bordered w-60 mb-4 input-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

            </div>

            {filteredStudents.length >0 ? <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Enrollment No.</th>
                        <th>Specialization</th>
                        <th>Section</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.enrollment_no} className="hover:bg-gray-100">
                            <td>{capitalizeFirstLetter(student.name)}</td>
                            <td>{student.enrollment_no}</td>
                            <td>{student.specialization}</td>
                            <td>{student.section}</td>
                            <td>
                                <Link to={`/students/${student.enrollment_no}`} className="text-blue-500 hover:underline">
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            : <p className='text-red-500 font-semibold text-center'> Data Not found</p>}
        </div>
    );
};

export default StudentList;
