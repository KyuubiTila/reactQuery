import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/HomePage';
import { RQsuperHeroPage } from '../components/RQSuperHero.page';
import { RQSuperHeroesPage } from '../components/RQSuperHeroes.page';
import { SuperHeroesPage } from '../components/SuperHeroesPage';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        <Route path="/rq-super-heroes/:heroId" element={<RQsuperHeroPage />} />
      </Routes>
    </>
  );
};
