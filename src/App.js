// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import StudentDetails from './components/StudentDetails';
// import FacultyDetails from './components/FacultyDetails';
// import AdminDashboard from './pages/AdminDashboard';
// import Header from './components/Header';
// import Students from './pages/Students';
// import Faculties from './pages/Faculties';

// function App() {
//   const handleSearch = (query) => {
//     // Implement search logic here
//   };
//   return (
//     <Router>
//       <div className="App">
//         <Header/>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/students" element={<Students />} />
//           <Route path="/faculty" element={<Faculties/>} />
//           <Route path="/students/:id" element={<StudentDetails />} />
//           <Route path="/faculty/:id" element={<FacultyDetails />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Faculty from './pages/Faculty';
import HomePage from './pages/HomePage';
import StudentDetails from './pages/StudentDetails';
import Students from './pages/Students';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/students/:enrollment_no" element={<StudentDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
