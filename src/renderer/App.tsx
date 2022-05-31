import Search from 'components/Search';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import '../../assets/fonts/fonts.css';
import GlobalStyle from './App.styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}
