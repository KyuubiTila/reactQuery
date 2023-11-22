import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from '../hooks/UseSuperHeroesData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = (data) => {
    console.log('data fetched succesfully', data);
  };

  const onError = (error) => {
    console.log('data fetching failed', error);
  };
  const { isLoading, data, isError, error, refetch, isFetching } =
    useSuperHeroesData(onSuccess, onError);

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddheroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2> ...Is Loading </h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
      </div>
      <button onClick={handleAddheroClick}> Add Hero</button>
      <br></br>
      <button onClick={refetch}>Fetch Heroes</button>
      <h2>RQ SuperHeroes page</h2>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};
