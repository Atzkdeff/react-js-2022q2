import './App.scss';
import {Header} from "./header/header";
import {Main} from "./main/main";
import {Footer} from "./footer/footer";

function App() {
  return (
    <div className="app">
        <Header className="app__header"/>
        <Main className="app__main"/>
        <Footer className="app__footer"/>
    </div>
  );
}

export default App;
