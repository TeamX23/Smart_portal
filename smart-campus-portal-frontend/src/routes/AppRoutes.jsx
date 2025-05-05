import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import StudentDashboard from '../pages/Dashboard/StudentDashboard';
import LecturerDashboard from '../pages/Dashboard/LecturerDashboard';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';
import RoomBooking from '../pages/RoomBooking';
import TimetableViewer from '../pages/TimetableViewer';
import MaintenanceForm from '../pages/MaintenanceForm';
import Notifications from '../pages/Notifications';
import AdminAnalytics from '../pages/AdminAnalytics';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<ProtectedRoute allowedRoles={['Student']}><StudentDashboard /></ProtectedRoute>} />
      <Route path="/lecturer" element={<ProtectedRoute allowedRoles={['Lecturer']}><LecturerDashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute allowedRoles={['Admin']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/book-room" element={<ProtectedRoute allowedRoles={['Student']}><RoomBooking /></ProtectedRoute>} />
      <Route path="/timetable" element={<ProtectedRoute allowedRoles={['Student', 'Lecturer']}><TimetableViewer /></ProtectedRoute>} />
      <Route path="/report-issue" element={<ProtectedRoute allowedRoles={['Student']}><MaintenanceForm /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute allowedRoles={['Student', 'Lecturer', 'Admin']}><Notifications /></ProtectedRoute>} />
      <Route path="/admin-analytics" element={<ProtectedRoute allowedRoles={['Admin']}><AdminAnalytics /></ProtectedRoute>} />
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);
export default AppRoutes;