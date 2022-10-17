import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

function App() {
  const handleSearchSubmit = (term) => {
    //call axios to make a request unplash api
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID 2pOv9dQBp3ANTuo-ClG4SSbML7cmUn2kig2M1yOMuA8',
      },
    });
  };

  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
