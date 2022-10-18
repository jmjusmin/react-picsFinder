import React, { useState } from 'react';
import Unsplash from '../api/Unsplash.jsx';
import SearchBar from './SearchBar';
import ImageList from './ImageList.jsx';

function App() {
  //set state of empty array
  const [img, setImg] = useState([]);

  const handleSearchSubmit = async (term) => {
    //call axios to make a request unplash api
    // Whenever we make a request with Axios,
    //it returns an object called a promise.
    // 2. handle promise with async and await
    const response = await Unsplash.get('/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID 2pOv9dQBp3ANTuo-ClG4SSbML7cmUn2kig2M1yOMuA8',
      },
    });
    //// 1. handle promise with .then()
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    setImg(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageList images={img} />
    </div>
  );
}

export default App;
