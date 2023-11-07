import { useSuperHeroesData } from '../hooks/UseSuperHeroesData';

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('data fetched succesfully', data);
  };

  const onError = (error) => {
    console.log('data fetching failed', error);
  };
  const { isLoading, data, isError, error, refetch, isFetching } =
    useSuperHeroesData(onSuccess, onError);

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
