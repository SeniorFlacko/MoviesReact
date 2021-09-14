import logo from './logo.svg';
import './App.css';

import SearchInput from './SearchInput';
import Title from './Title';

function App() {

  const onSearch = (searchTerm) => {
    alert(searchTerm);
  }

  return (
    <div className="App">
      <Title title='Search Title' />
      <SearchInput onSearch={onSearch} />
    </div>
  );
}

export default App;
