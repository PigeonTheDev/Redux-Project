import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducers";
import { AddForm } from "../../components/AddForm/AddForm";
import { Header } from "../../components/Header/Header";

import { UserTable } from "../../components/UserTable/UserTable";
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
