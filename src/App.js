import logo from './logo.svg';
import './App.css';

import SearchInput from './SearchInput';

function App() {

  const onSearch = (searchTerm) => {
    alert(searchTerm);
  }

  return (
    <div className="App">
      <SearchInput onSearch={onSearch} />
    </div>
  );
}

export default App;
