import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchColors = async (pageNumber) => {
  const result = await axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
  );
  return result.data;
};

export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['colors', pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <h2>Colors Page</h2>
        {data.map((color) => {
          return (
            <div key={color.id}>
              {color.id} . {color.label}
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          previous
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          next
        </button>
      </div>
      {isFetching && 'loading'}
    </>
  );
};
