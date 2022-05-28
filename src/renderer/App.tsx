import Search from 'components/Search';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
}
