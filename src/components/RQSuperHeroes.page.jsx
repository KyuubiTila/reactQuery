import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superHeroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    // after 5 seconds the caache for react-Query [super-heroes] is garbaged i.e no memory storage for it again
    // the default if not set is 5 minutes
    {
      cacheTime: 5000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
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
