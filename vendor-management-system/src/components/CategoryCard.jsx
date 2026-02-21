import React from 'react';

const CategoryCard = ({ category }) => (
  <div className={`category-card p-2 border rounded-3 text-center cursor-pointer ${category.selected ? 'border-primary border-2 bg-light-blue' : ''}`}>
    <img src={category.img} alt={category.name} style={{ width: '40px', marginBottom: '8px' }} />
    <div className="small fw-bold" style={{ fontSize: '10px' }}>{category.name}</div>
  </div>
);

export default CategoryCard;