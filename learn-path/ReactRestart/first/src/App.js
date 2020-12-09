import Contact from "./contact";
import { Route, BrowserRouter } from "react-router-dom";
import About from "./About";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>这是我的第一个React应用程序</h1>
          <NavBar />
        </header>
        <Route path="/about" component={About} />
        <Route path="/concat" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
