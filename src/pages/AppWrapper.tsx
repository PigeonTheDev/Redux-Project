import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Board } from "./Board/Board";
import { EditPage } from "./EditPage/EditPage";
import { EditPage2 } from "./EditPage/EditPage2";

export const AppWrapper = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Board} />
          <Route path="/edit" exact component={EditPage} />
          <Route path="/edit2/:id" exact component={EditPage2} />
        </Switch>
      </Router>
    </>
  );
};
