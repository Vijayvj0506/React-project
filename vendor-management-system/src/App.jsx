import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import VendorForm from './components/VendorForm';

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleSidebar = () => setShowMobileSidebar(!showMobileSidebar);

  return (
    <div className="d-flex bg-light min-vh-100">
      {/* Sidebar - Desktop & Mobile version managed inside Sidebar.js */}
      <Sidebar show={showMobileSidebar} handleClose={() => setShowMobileSidebar(false)} />
      
      {/* Main Content Area */}
      <div className="flex-grow-1 main-content w-100">
        <TopNav onMenuClick={toggleSidebar} />
        <main className="p-3 p-md-4">
          <div className="bg-white rounded-4 shadow-sm p-3 p-md-4 border">
            <VendorForm />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;