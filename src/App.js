import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [searchText, setSearchText] = useState('');
  const [statistics, setStatistics] = useState({
    totalSale: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0
  });

  useEffect(() => {
    fetchData();
    fetchStatistics();
  }, [currentPage, selectedMonth, searchText]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/transactions?month=${selectedMonth}&page=${currentPage}&search=${searchText}`);
      setTransactions(response.data.transactions);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/statistics?month=${selectedMonth}`);
      setStatistics({
        totalSale: response.data.totalSaleAmount,
        totalSoldItems: response.data.totalSoldItems,
        totalNotSoldItems: response.data.totalUnsoldItems
      });
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
    setCurrentPage(1);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <TransactionsTable
        transactions={transactions}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
        onMonthChange={handleMonthChange}
      />
      <TransactionsStatistics
        totalSale={statistics.totalSale}
        totalSoldItems={statistics.totalSoldItems}
        totalNotSoldItems={statistics.totalNotSoldItems}
        selectedMonth={selectedMonth}
      />
      <TransactionsBarChart selectedMonth={selectedMonth} />
    </div>
  );
}

export default App;
