import './App.css';
import {title} from "./title/title";
import {GenreToggle} from "./genre-toggle/genre-toggle";
import {SearchForm} from "./search-form/search-form";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        { title }
      </header>
      <main className="app-main">
        <SearchForm></SearchForm>
        <GenreToggle></GenreToggle>
      </main>
    </div>
  );
}

export default App;
