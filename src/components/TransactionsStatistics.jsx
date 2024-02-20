import React from 'react';
import '../styles/TransactionsStatistics.css'; 

const TransactionsStatistics = ({ totalSale, totalSoldItems, totalNotSoldItems, selectedMonth }) => {
  return (
    <div className="statistics-container">
      <h2>Statistics - {selectedMonth}</h2>
      <div className="statistics">
        <div className="statistic">
          <p>Total Sale</p>
          <p>{totalSale}</p>
        </div>
        <div className="statistic">
          <p>Total Sold item</p>
          <p>{totalSoldItems}</p>
        </div>
        <div className="statistic">
          <p>Total not sold item</p>
          <p>{totalNotSoldItems}</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionsStatistics;
