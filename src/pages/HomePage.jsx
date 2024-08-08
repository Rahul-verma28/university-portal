import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">University Portal</h1>
      <div className="flex space-x-4">
        <Link to="/students" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Students
        </Link>
        <Link to="/faculty" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
          Faculty
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
