import Navbar from './components/UIComponents/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* Component Imports ////////////////////////////////////////////
import HomePage from './pages/HomePage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AboutPage from './pages/AboutPage';

import ProtectedRoute from './components/Utils/ProtectedRoute';
import UnprotectedRoute from './components/Utils/UnprotectedRoute';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Home *******************************************************/}
          <Route
            exact
            path='/'
            element={
              <UnprotectedRoute UnprotectedComponent={<HomePage />} />
            }></Route>
          {/* User Dashboard *******************************************************/}

          <Route exact path='/user' element={<ProtectedRoute />}></Route>
          <Route exact path='/admin'element={<ProtectedRoute />}></Route>

          {/* About *******************************************************/}

          <Route
            exact
            path='/about'
            element={
              <UnprotectedRoute UnprotectedComponent={<AboutPage />} />
            }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
