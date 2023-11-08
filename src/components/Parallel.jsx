import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchParallelHeroes = async () => {
  const response = await axios.get('http://localhost:4000/superHeroes');
  return response.data;
};

const fetchParallelFriends = async () => {
  const response = await axios.get('http://localhost:4000/friends');
  return response.data;
};

export const ParallelQueryPage = () => {
  const {
    data: heroesData,
    isLoading: heroesLoading,
    isError: heroesError,
  } = useQuery('parallelHeroes', fetchParallelHeroes);

  const {
    data: friendsData,
    isLoading: friendsLoading,
    isError: friendsError,
  } = useQuery('parallelFriends', fetchParallelFriends);

  if (heroesLoading || friendsLoading) {
    return <div>Loading...</div>;
  }

  if (heroesError || friendsError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {heroesData.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
      -
      {friendsData.map((friend, index) => (
        <div key={index}>{friend.name}</div>
      ))}
    </div>
  );
};
