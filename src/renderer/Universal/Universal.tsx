// Imports
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';

// Styling

// React

// Redux

export default () => {
  const location = useLocation();
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li className={location.pathname === '/generate' ? 'selected' : ''}>
            <Link to="/generate">Generate</Link>
          </li>
          <li className={location.pathname === '/view' ? 'selected' : ''}>
            <Link to="/view">View</Link>
          </li>
          <li className={location.pathname === '/optimize' ? 'selected' : ''}>
            <Link to="/optimize">Optimize</Link>
          </li>
          <li className={location.pathname === '/io' ? 'selected' : ''}>
            <Link to="/io">I/O</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
