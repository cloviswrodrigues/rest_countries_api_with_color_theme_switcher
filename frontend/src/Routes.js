import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/country/:name" exact element={<Country />} />
    </Routes>
  );
}
