import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import transactionsData from './transactions';

const App = () => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addTransaction = (newTransaction) => {
    const newId = transactions.length + 1;
    const updatedTransactions = [...transactions, { id: newId, ...newTransaction }];
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Flatiron Bank</h1>
      <div className="search-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="form-container">
        <TransactionForm addTransaction={addTransaction} />
      </div>
      <TransactionTable transactions={filteredTransactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
};

export default App;
