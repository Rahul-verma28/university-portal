import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh]">
      <h2 className="text-4xl font-extrabold mb-4">University Portal</h2>
      <p className="text-lg mb-6 text-center">Where knowledge meets opportunity - manage and oversee Admin activities with ease.</p>
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
