import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superHeroes');
};

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('data fetched succesfully', data);
  };

  const onError = (error) => {
    console.log('data fetching failed', error);
  };
  const { isLoading, data, isError, error, refetch, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      // after 5 seconds the caache for react-Query [super-heroes] is garbaged i.e no memory storage for it again
      // the default if not set is 5 minutes
      //   cacheTime: 5000,

      // ======REFETCH DEFAULTS=====
      //   refetchOnMount: true,
      //   refetchOnWindowFocus: true,

      //  ======= POLLING=====
      //   refetchInterval: 2000,
      //   refetchIntervalInBackground: true,

      //   === USEQUERY ON CLICK===
      //   enabled: false,

      //   ==== SUCCESS AND ERROR CALLBACKS ====
      onSuccess,
      onError,

      //   ====DATA TRANSFORMATION ====
      select: (data) => {
        const superHeroesNames = data.data.map((heroes) => heroes.name);
        return superHeroesNames;
      },
    }
  );

  if (isLoading || isFetching) {
    return <h2> ...Is Loading </h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }
  return (
    <>
      <button onClick={refetch}>Fetch Heroes</button>
      <h2>RQ SuperHeroes page</h2>
      {/* {data?.data.map((heroes) => {
        return <div key={heroes.name}>{heroes.name}</div>;
      })} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
