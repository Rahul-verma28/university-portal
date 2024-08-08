import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import FacultyPage from './pages/FacultyPage';
import StudentDetails from './components/StudentDetails';
import FacultyDetails from './components/FacultyDetails';
import AdminDashboard from './pages/AdminDashboard';
import Header from './components/Header';

function App() {
  const handleSearch = (query) => {
    // Implement search logic here
  };
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/faculty/:id" element={<FacultyDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
