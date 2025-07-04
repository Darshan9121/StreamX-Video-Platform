import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import VideoView from './pages/VideoView';
import './App.css';
import VideoUploadForm from './components/VideoUploadForm';

function App() {
  return (
    <div className='bg-[#231010] container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/video/:id" element={<VideoView />} />
          <Route path="/upload" element={<VideoUploadForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
