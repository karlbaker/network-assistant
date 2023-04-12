import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AdminDashboard from './Pages/AdminDashboard';
import AddPortPage from './Pages/AddPortPage';
import AddSwitchPage from './Pages/AddSwitchPage';
import AddVLANPage from './Pages/AddVLANPage';
import AddSiteLocationPage from './Pages/AddSiteLocationPage';
import AddPortLocationPage from './Pages/AddPortLocationPage';
import TopNav from './components/TopNav';

function App() {
  return (
    <>
    <TopNav />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/addport" element={<AddPortPage />} />
        <Route path="/admin/addswitch" element={<AddSwitchPage />} />
        <Route path="/admin/addvlan" element={<AddVLANPage />} />
        <Route path="/admin/addsitelocation" element={<AddSiteLocationPage />} />
        <Route path="/admin/addportlocation" element={<AddPortLocationPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
