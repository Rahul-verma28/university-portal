import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();
  // Fetch and display student details based on ID

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Student Details</h2>
      {/* Display student details here */}
    </div>
  );
};

export default StudentDetails;
