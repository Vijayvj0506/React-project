import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Store, Grid, 
  CreditCard, ShoppingCart, FileText, HelpCircle, LogOut, X 
} from 'lucide-react';

const Sidebar = ({ show, handleClose }) => {
  // Initialize 'Vendors' as the default active item to match your image
  const [activeTab, setActiveTab] = useState('');

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20}/> },
    { name: 'Customers', icon: <Users size={20}/> },
    { name: 'Vendors', icon: <Store size={20}/> },
    { name: 'Categories', icon: <Grid size={20}/> },
    { name: 'Subscriptions', icon: <CreditCard size={20}/> },
    { name: 'Orders', icon: <ShoppingCart size={20}/> },
    { name: 'CMS', icon: <FileText size={20}/> },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-4 text-center position-relative">
        <div className="logo-placeholder mx-auto">Logo</div>
        <button className="btn d-lg-none position-absolute end-0 top-0 mt-3 me-2" onClick={handleClose}>
          <X size={24} />
        </button>
      </div>
      
      <nav className="mt-2 px-3">
        {menuItems.map((item, idx) => {
          // Check if this specific item is the active one
          const isActive = activeTab === item.name;

          return (
            <div 
              key={idx} 
              onClick={() => setActiveTab(item.name)} // Sets the blue background on click
              className={`nav-item d-flex align-items-center p-3 mb-2 rounded-3 cursor-pointer transition-all ${
                isActive 
                  ? 'bg-active-blue text-white shadow' 
                  : 'text-secondary hover-item'
              }`}
            >
              <span className="me-3 d-flex align-items-center">{item.icon}</span>
              <span className="fw-bold small">{item.name}</span>
            </div>
          );
        })}
        
        <div className="mt-5 pt-4 border-top">
          <div className="nav-item d-flex align-items-center p-3 text-secondary cursor-pointer hover-item">
            <HelpCircle size={20} className="me-3"/>
            <span className="fw-bold small">Help</span>
          </div>
          <div className="nav-item d-flex align-items-center p-3 text-secondary cursor-pointer hover-item">
            <LogOut size={20} className="me-3"/>
            <span className="fw-bold small">Logout</span>
          </div>
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar bg-white border-end d-none d-lg-block">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar bg-white border-end d-lg-none ${show ? 'show' : ''}`}>
        <SidebarContent />
      </div>
      {show && <div className="sidebar-overlay d-lg-none" onClick={handleClose}></div>}
    </>
  );
};

export default Sidebar;