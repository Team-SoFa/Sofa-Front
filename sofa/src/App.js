// src/App.js
import React, { useState } from 'react';
import TextField from './components/TextField/TextField';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  // Handle name input change
  const handleNameChange = (e) => setName(e.target.value);

  // Handle search input change
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="App">
      <h1>Bookmark App Example</h1>
      
      {/* Search Bar Component */}
      <SearchBar value={searchQuery} onChange={handleSearchChange} placeholder="Search bookmarks..." />
      <p>Search Query: {searchQuery}</p>
      
      {/* TextField with Button */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          required
        />
        <Button type="submit" label="Submit" />
      </form>

      {/* Display submitted name */}
      {submittedName && <p>Submitted Name: {submittedName}</p>}
    </div>
  );
}

export default App;
