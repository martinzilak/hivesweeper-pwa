import { Route, Routes } from 'react-router-dom';
import { Policy, Home } from './modules/web/pages';
import { Index, SiteRoute } from './modules/web/constants';
import { Layout } from './modules/web/components';
import { FC } from 'react';

const App: FC = () => (
  <Routes>
    <Route path={Index} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={SiteRoute.policy.path} element={<Policy />} />
    </Route>
  </Routes>
);

export default App;
