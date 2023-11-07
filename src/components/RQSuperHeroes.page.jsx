import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superHeroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2> ...Is Loading </h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }
  return (
    <>
      <h2>RQ SuperHeroes page</h2>
      {data?.data.map((heroes) => {
        return <div key={heroes.name}>{heroes.name}</div>;
      })}
    </>
  );
};
