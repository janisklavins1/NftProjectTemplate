import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Loader from './app/component/Loader/Loader';
import React, { Suspense } from 'react';

const MainPage = React.lazy(() => import('./app/route/mainPage/MainPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
