import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

const TopNav = ({ onMenuClick }) => (
  <header className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center sticky-top">
    <div className="d-flex align-items-center gap-3">
      {/* Hamburger Menu Icon */}
      <button className="btn btn-light d-lg-none border-0" onClick={onMenuClick}>
        <Menu size={24} />
      </button>
      <h5 className="mb-0 fw-bold">Vendor</h5>
    </div>
    
    <div className="d-flex align-items-center gap-2 gap-md-3">
      <Search size={20} className="text-secondary cursor-pointer d-none d-sm-block" />
      <Bell size={20} className="text-secondary cursor-pointer" />
      <div className="d-flex align-items-center border rounded-pill px-2 py-1 gap-2 cursor-pointer shadow-sm">
        <img src="https://i.pravatar.cc/30" className="rounded-circle" alt="user" />
        <span className="small fw-bold d-none d-sm-inline">Super Admin</span>
      </div>
    </div>
  </header>
);

export default TopNav;