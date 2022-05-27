import { debounce } from 'hooks/useDebounce';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const { ipcRenderer } = window.electron;

const Hello = () => {
  const [results, setResults] = useState<Array<{ name: string }>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      const value = e.target.value.trim();
      if (value.length > 0) {
        ipcRenderer.sendMessage('search-request', [value]);
      } else {
        ipcRenderer.sendMessage('search-reset', ['size']);
        setResults([]);
      }
    }, 200)();
  };

  useEffect(() => {
    ipcRenderer.on('search-reply', (data) => {
      setResults(data);
    });

    ipcRenderer.on('focus-input', (data) => {
      inputRef.current?.focus();
    });
  }, []);

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
          ref={inputRef}
          onChange={handleChange}
          type="search"
          placeholder="Search for..."
        />
      </div>
      <ul id="results">
        {results?.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
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
