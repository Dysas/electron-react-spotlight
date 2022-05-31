import { debounce } from 'hooks/useDebounce';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Results from './Results';
import SearchInput from './SearchInput';
import Tabs from './Tabs';

const { ipcRenderer } = window.electron;

const Search = () => {
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
      <Tabs />
      <SearchInput ref={inputRef} onChange={handleChange} />
      <Results results={results} />
    </>
  );
};

export default Search;
