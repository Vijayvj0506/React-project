import React, { useState } from 'react';
import { Camera, Plus } from 'lucide-react';
import CategoryCard from './CategoryCard';

const VendorForm = () => {
  const [toggle, setToggle] = useState(false);

  const categories = [
    { name: 'Plastic', img: 'https://cdn-icons-png.flaticon.com/512/2666/2666631.png', selected: true },
    { name: 'Glass', img: 'https://cdn-icons-png.flaticon.com/512/1831/1831952.png', selected: true },
    { name: 'Paper', img: 'https://cdn-icons-png.flaticon.com/512/2541/2541991.png', selected: true },
    { name: 'Organic', img: 'https://cdn-icons-png.flaticon.com/512/1844/1844510.png', selected: false },
    { name: 'Metal', img: 'https://cdn-icons-png.flaticon.com/512/2921/2921385.png', selected: false },
    { name: 'Clothing', img: 'https://cdn-icons-png.flaticon.com/512/2965/2965250.png', selected: false },
    { name: 'Cardboards', img: 'https://cdn-icons-png.flaticon.com/512/3045/3045501.png', selected: false },
    { name: 'Wood', img: 'https://cdn-icons-png.flaticon.com/512/4601/4601004.png', selected: false },
  ];

  return (
    <form>
      <h5 className="fw-bold mb-4">Add New Vendor</h5>
      
     
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <label className="form-label small text-secondary">Shop Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">GST Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Mobile Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Alternate Mobile Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Email id</label>
          <input type="email" className="form-control" />
        </div>
      </div>

      <h6 className="fw-bold mb-3">Subscription Details</h6>
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <label className="form-label small text-secondary">Subscription Package</label>
          <select className="form-select"><option></option></select>
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Subscription type</label>
          <select className="form-select"><option></option></select>
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Discount type</label>
          <select className="form-select"><option></option></select>
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Actual price</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Discount</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Discounted price</label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <h6 className="fw-bold mb-3">Address Details</h6>
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <label className="form-label small text-secondary">Address</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Pincode</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Country</label>
          <select className="form-select"><option></option></select>
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">State/province</label>
          <select className="form-select"><option></option></select>
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">City/Town</label>
          <select className="form-select"><option></option></select>
        </div>
        <div className="col-md-4">
          <label className="form-label small text-secondary">Landmark</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-8">
          <label className="form-label small text-secondary">About the Company</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
      </div>

      {/* Image Upload Placeholders */}
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label small fw-bold">Add Shop Logo</label>
          <div className="upload-box border rounded-3 d-flex align-items-center justify-content-center">
             <Camera color="#ced4da" size={32} />
             <Plus className="plus-icon" size={14}/>
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label small fw-bold">Add Shop images</label>
          <div className="upload-box border rounded-3 d-flex align-items-center justify-content-center">
             <Camera color="#ced4da" size={32} />
             <Plus className="plus-icon" size={14}/>
          </div>
        </div>
      </div>

      <h6 className="fw-bold mb-3">Categories Dealing with</h6>
      <div className="d-flex flex-wrap gap-3 mb-4">
        {categories.map((cat, i) => (
          <CategoryCard key={i} category={cat} />
        ))}
      </div>

      <div className="mb-4">
        <label className="form-label small fw-bold d-block">Follow General Price</label>
        <div className="form-check form-switch custom-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            checked={toggle}
            onChange={() => setToggle(!toggle)}
          />
          <label className="form-check-label ms-2 small">{toggle ? 'Yes' : 'No'}</label>
        </div>
      </div>
    </form>
  );
};

export default VendorForm;