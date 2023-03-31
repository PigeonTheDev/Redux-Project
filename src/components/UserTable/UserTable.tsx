import { User } from "../../userModal";
import React from "react";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { USER_DELETE } from "../../redux/userAction";
import { useHistory } from "react-router-dom";
import "./UserTable.css";

interface IUserTable {
  users: User[];
}

export const UserTable: React.FC<IUserTable> = ({ users }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteOnClickHandle = (user: User) => {
    dispatch(USER_DELETE(user));
  };

  const editOnClickHandle = (user: User) => {
    history.push(`edit2/${user.id}`);
  };

  return (
    <div className="tableGeneral">
      <div className="headersGeneral">
        <div className="userName">Name</div>
        <div className="userActivity">Activity</div>
        <div className="userAge">Age</div>
        <div className="userBlank"></div>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} className="ItemsGeneral">
            <div className="userName">{user.name}</div>
            <div className="userActivity">{user.isActive ? "Active" : "Inactive"}</div>
            <div className="userAge">{user.age}</div>
            <div className="userBlank">
              <Button text="Edit" bgcolor="#ffe08a" color="#4a4a4a" onclick={() => editOnClickHandle(user)}></Button>
              <Button text="Delete" bgcolor="#f14668" color="#f5f5f5" onclick={() => deleteOnClickHandle(user)}></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
