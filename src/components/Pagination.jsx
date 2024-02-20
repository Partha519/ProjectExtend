import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    onPageChange(currentPage + 1);
  }

  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  }

  return (
    <div className="pagination-container">
      <span>Page No: {currentPage}</span>
      <button className="pagination-button" onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <button className="pagination-button" onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      <span>Per Page: 10</span>
    </div>
  );
}

export default Pagination;
