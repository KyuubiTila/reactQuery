import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroeData';

export const RQsuperHeroPage = () => {
  const { heroId } = useParams();

  const { isLoading, data, isError, error, isFetching } =
    useSuperHeroData(heroId);

  if (isLoading || isFetching) {
    return <h2> ...isLoading </h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data);

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
