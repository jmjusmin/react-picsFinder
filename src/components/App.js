import React, { useState } from 'react';
import Logo from './Logo.jsx';
import Unsplash from '../api/Unsplash.jsx';
import SearchBar from './SearchBar';
import ImageList from './ImageList.jsx';

function App() {
  //set state of empty array
  const [img, setImg] = useState([]);
  const apiKey = 'Client-ID ' + process.env.REACT_APP_API_KEY;

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
        Authorization: apiKey,
      },
    });
    //// 1. handle promise with .then()
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    setImg(response.data.results);
  };

  const renderContent = () => {
    if (img.length === 0) {
      return (
        <div className="ui container result-none" style={{ marginTop: '20px' }}>
          <Logo styleLogo={'result-none-logo'} />
          <SearchBar
            onSubmit={handleSearchSubmit}
            styleSearchBar={'result-none-search'}
          />
        </div>
      );
    } else {
      return (
        <div className="ui container result" style={{ marginTop: '20px' }}>
          <Logo styleLogo={'result-logo'} />
          <SearchBar
            onSubmit={handleSearchSubmit}
            styleSearchBar={'result-search'}
          />
          <ImageList images={img} />
        </div>
      );
    }
  };

  return renderContent();
}

export default App;
