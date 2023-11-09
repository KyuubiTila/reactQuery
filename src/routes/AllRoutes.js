import { Routes, Route } from 'react-router-dom';
import { DependentQueriesPage } from '../components/DependentQueries.page';
import { DynamicParallelPage } from '../components/DynamicParallel.page';
import { HomePage } from '../components/HomePage';
import { ParallelQueryPage } from '../components/Parallel';
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
        <Route path="/parallel" element={<ParallelQueryPage />} />
        <Route
          path="/dynamicParallel"
          element={<DynamicParallelPage heroIds={[1, 3]} />}
        />
        <Route
          path="/dependentQueries"
          element={<DependentQueriesPage email="page@gmail.com" />}
        />
      </Routes>
    </>
  );
};
