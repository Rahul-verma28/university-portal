import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const StudentDetails = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { enrollment_no } = useParams();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    useEffect(() => {
        const fetchStudent = async () => {
            const baseUrl = process.env.REACT_APP_API; // Accessing .env variable

            try {
                const response = await axios.get(`${baseUrl}/students/${enrollment_no}`);

                if (response.data.length > 0) {
                    setStudent(response.data[0]);
                } else {
                    setError('No data found for the given enrollment number.');
                }

                setLoading(false);
            } catch (error) {
                setError('Error fetching student details. Please try again.');
                setLoading(false);
            }
        };

        fetchStudent();
    }, [enrollment_no]);

    if (loading) return <Loader />;
    if (error) return <div className="text-red-500 text-center py-4">{error}</div>;

    return (
        student ? (
            <div className="max-w-3xl sm:mx-auto p-6 m-6 bg-gray-100 shadow-lg rounded-lg border border-gray-300">
                <div className="flex items-center mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {student.name[0]}
                    </div>
                    <div className="ml-4">
                        <h1 className=" text-2xl sm:text-4xl font-extrabold text-gray-800 mb-2">{capitalizeFirstLetter(student.name)}</h1>
                        <p className="text-sm sm:text-lg text-gray-600"><span className="font-semibold">Enrollment Number:</span> {student.enrollment_no}</p>
                        <p className="text-sm sm:text-lg text-gray-600"><span className="font-semibold">Admission Number:</span> {student.admission_no}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Details</h2>
                <div className="mb-6 text-text-lg text-gray-600">
                    <p><span className="font-semibold">Father's Name:</span> {student.father_name}</p>
                    <p><span className="font-semibold">Mother's Name:</span> {student.mother_name}</p>
                    <p><span className="font-semibold">Course:</span> {student.course}</p>
                    <p><span className="font-semibold">Batch:</span> {student.batch}</p>
                    <p><span className="font-semibold">Specialization:</span> {student.specialization}</p>
                    <p><span className="font-semibold">Semester:</span> {student.semester}</p>
                    <p><span className="font-semibold">Section:</span> {student.section}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Subjects</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        {student.subjects.map((subject, index) => (
                            <li key={index} className="text-sm sm:text-lg text-gray-600">
                                <span className="font-semibold">{subject.subject_name}:</span> {subject.code}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ) : (
            <div className="text-center py-4 text-lg text-gray-700">
                No student details available.
            </div>
        )
    );
};

export default StudentDetails;
