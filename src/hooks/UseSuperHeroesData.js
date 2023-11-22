import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superHeroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superHeroes', hero);
};
export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
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
    // select: (data) => {
    //   const superHeroesNames = data.data.map((heroes) => heroes.name);
    //   return superHeroesNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
