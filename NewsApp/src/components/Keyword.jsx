import React, { useState } from 'react';
import { useGetGoogleNewsQuery } from '../redux/services/googleNews';
import { Spin } from 'antd';

const Keyword = () => {
  const [keyword, setKeyword] = useState('');
  const { data, error, isLoading, isFetching } = useGetGoogleNewsQuery(keyword);

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    setKeyword(value);
  };

  console.log(isFetching);

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
      {isFetching ? (
        <Spin size="large" />
      ) : (
        <div>
          <h2>Results:</h2>
          <ul>
            <li>{data?.items[0].title}</li>
          </ul>
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Keyword;
