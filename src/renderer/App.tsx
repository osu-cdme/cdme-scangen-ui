// Imports
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Components
import Universal from './Universal/Universal';
import Generate from './Generate/Generate';
import View from './View/View';
import IO from './IO/IO';
import Optimize from './Optimize/Optimize';

// Styling
import './App.scss';

// Clear console each time we launch
// eslint-disable-next-line no-console
console.clear();

export default function App() {
  const DEFAULT_ROUTE = 'generate';
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Universal />}>
          <Route path="" element={<Navigate to={DEFAULT_ROUTE} />} />
          <Route path="generate" element={<Generate />} />
          <Route path="view" element={<View />} />
          <Route path="io" element={<IO />} />
          <Route path="optimize" element={<Optimize />} />
        </Route>
      </Routes>
    </Router>
  );
}
