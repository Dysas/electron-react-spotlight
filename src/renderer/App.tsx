import Search from 'components/Search';
import Tabs from 'components/Tabs';
import { IconContext } from 'react-icons';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import '../../assets/fonts/fonts.css';
import GlobalStyle from './App.styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <IconContext.Provider value={{ color: 'blue', className: 'app-icon' }}>
        <Router>
          <Tabs />
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </Router>
      </IconContext.Provider>
    </>
  );
}
