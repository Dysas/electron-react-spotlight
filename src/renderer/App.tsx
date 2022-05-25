import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <>
      <div className="runner-input">
        <ul id="tabs">
          <li id="run" className="active">
            search
          </li>
        </ul>
        <input
          id="searchBox"
          type="search"
          placeholder="Search for..."
          autoFocus
        />
      </div>
      <ul id="results" />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
