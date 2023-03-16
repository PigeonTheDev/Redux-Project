import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { USER_EDIT } from "../../redux/userAction";
import { User } from "../../userModal";
import { Button } from "../Button/Button";
import "./EditPage.css";

export const EditPage = () => {
  const dispatch = useDispatch();

  const location = useLocation<User>();

  const history = useHistory();

  const [emptyValidation, setEmptyValidation] = useState<boolean>(true);
  const [userFormData, setUserFormData] = useState<User>(location.state);

  const nameOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length === 0 || userFormData.age === 0 ? setEmptyValidation(true) : setEmptyValidation(false);
    setUserFormData((prevValue) => ({ ...prevValue, name: e.target.value }));
  };

  const ageOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length === 0 || userFormData.name.length === 0 ? setEmptyValidation(true) : setEmptyValidation(false);
    setUserFormData((prevValue) => ({ ...prevValue, age: parseInt(e.target.value) }));
  };

  const confirmOnHandle = () => {
    dispatch(USER_EDIT(userFormData));
    history.push("/");
  };

  return (
    <div className="EditPage">
      <div className="checkboxGen">
        <input
          onChange={() => {
            setUserFormData((prevValue) => ({ ...prevValue, isActive: !userFormData.isActive }));
          }}
          type="checkbox"
          checked={userFormData.isActive ? true : false}
        />
        Active
      </div>
      <div className="NameAgeGeneral">
        <div className="NameAge">
          Name <input className="inp" onChange={nameOnChangeHandle} type="text" placeholder={userFormData.name} />
        </div>
        <div className="NameAge">
          Age <input className="inp" onChange={ageOnChangeHandle} type="number" placeholder={userFormData.age.toString()} />
        </div>
      </div>
      <div>
        <Button text="Confirm" disabledbtn={emptyValidation} bgcolor="#48c78e" color="#f5f5f5" onclick={confirmOnHandle}></Button>
      </div>
    </div>
  );
};
