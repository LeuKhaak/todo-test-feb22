import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Main from "./components/pages/Main";
import ToDoList from "./components/pages/ToDoList";

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
        <Switch>
          <>
            <Route path="/" component={Main} exact={true} />
            <Route path="/todo" component={ToDoList} />
          </>
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
