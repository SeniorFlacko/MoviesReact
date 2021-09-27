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

  const crashingApp = () => {
    alert(
      "I'm going to crash!, Press Escape to see <ErrorBoundary /> again :)"
    );
  };

  return (
    <div className="App">
      <Title title="Search Title" />
      <SearchInput onSearch={onSearch} />
      <ErrorBoundary>
        <Button title="+ add movie" onClick={crashingApp} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
