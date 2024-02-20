import React from 'react';
import Pagination from './Pagination';
import SearchTransaction from './SearchTransaction';
import SelectMonth from './SelectMonth';
import '../styles/TransactionsTable.css';

const TransactionsTable = ({ transactions, currentPage, totalPages, onPageChange, onSearch, onMonthChange }) => {
  return (
    <div className="transactions-table-container">
      <h2>Transaction Dashboard</h2>
      <div className="filters">
        <SearchTransaction onSearch={onSearch} />
        <SelectMonth onMonthChange={onMonthChange} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
              <td><img src={transaction.image} alt={transaction.title} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

export default TransactionsTable;
