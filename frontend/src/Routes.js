import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';
import PageNotFound from './pages/PageNotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/country/:countryCode" exact element={<Country />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
