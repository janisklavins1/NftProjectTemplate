import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import MainPage from './app/route/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
