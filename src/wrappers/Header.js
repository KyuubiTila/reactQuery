import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heroes">Traditional Super Heroes</Link>
        </li>
        <li>
          <Link to="/rq-super-heroes">RQ Super Heroes</Link>
        </li>
        <li>
          <Link to="/parallel">Parallel Query</Link>
        </li>
        <li>
          <Link to="/dynamicParallel">Dynamic Parallel </Link>
        </li>
      </ul>
    </nav>
  );
};
