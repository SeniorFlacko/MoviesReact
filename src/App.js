import logo from "./logo.svg";
import "./App.css";

import SearchInput from "./SearchInput";
import Button from "./Button";
import Title from "./Title";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const onSearch = (searchTerm) => {
    alert(searchTerm);
  };

  return (
    <div className="App">
      <Title title="Search Title" />
      <SearchInput onSearch={onSearch} />
      <Button title="+ add movie" onClick={() => {}} />
    </div>
  );
}

export default App;
