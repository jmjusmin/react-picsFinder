import React from 'react';
import SearchBar from './SearchBar';

function App() {
  const handleSearchSubmit = (term) => {
    console.log(term.target.value);
  };
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
