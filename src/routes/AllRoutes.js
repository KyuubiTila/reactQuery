import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/HomePage';
import { RQSuperHeroesPage } from '../components/RQSuperHeroes.page';
import { SuperHeroesPage } from '../components/SuperHeroesPage';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
      </Routes>
    </>
  );
};
