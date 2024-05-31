import React, { useState } from 'react';
import { useGetGoogleNewsQuery } from '../redux/services/googleNews';

const Keyword = () => {
  const [keyword, setKeyword] = useState('');
  const { data, error, isLoading } = useGetGoogleNewsQuery(keyword, {
    skip: !keyword, 
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    setKeyword(value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search news"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Sonuçlar:</h2>
          <ul>
            {data.items[0].title}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Keyword;
