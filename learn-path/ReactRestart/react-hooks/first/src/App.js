import "./App.css";
import Home from "./components/Home/index";
import TodoList from "./components/TodoList/index";
import MyHeader from "./views/MyHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyHeader />
      <Route exact path="/" component={Home}></Route>
      <Route path="/list" component={TodoList}></Route>
    </Router>
  );
}

export default App;
