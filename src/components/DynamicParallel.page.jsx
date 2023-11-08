import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async (heroId) => {
  return await axios.get(`http://localhost:4000/superHeroes/${heroId}`);
};

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log({ queryResult });
  return <div>DynamicParallel.page</div>;
};
