import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducers";
import { AddForm } from "../AddForm/AddForm";
import { Header } from "../Header/Header";

import { UserTable } from "../UserTable/UserTable";
import "./Board.css";

export const Board = () => {
  const users = useSelector((state: GlobalState) => state.users);
  return (
    <div className="board">
      <Header employeeCount={users.length} />
      <div className="table">
        <AddForm />
        <UserTable users={users} />
      </div>
    </div>
  );
};
