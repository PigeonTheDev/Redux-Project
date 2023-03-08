import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./AddForm.css";
import { useDispatch } from "react-redux";
import { USER_ADD } from "../../redux/userAction";
import { User } from "../../userModal";

export const AddForm = () => {
  const dispatch = useDispatch();
  const [userActivity, setUserActivity] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(" ");
  const [userAge, setUserAge] = useState<number>(0);
  const [emptyValidation, setEmptyValidation] = useState<boolean>(true);

  const nameOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    e.target.value.length === 0 || userAge === 0 ? setEmptyValidation(true) : setEmptyValidation(false);
  };
  const ageOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(parseInt(e.target.value));
    e.target.value.length === 0 || userName.length === 0 ? setEmptyValidation(true) : setEmptyValidation(false);
  };
  const submitOnClickHandle = () => {
    const newUser: User = {
      name: userName,
      age: userAge,
      isActive: userActivity,
      id: Math.round(Math.random() * 10000),
    };
    dispatch(USER_ADD(newUser));
  };

  return (
    <div className="AddForm">
      <div className="checkboxGen">
        Active
        <input
          onChange={() => {
            setUserActivity(!userActivity);
          }}
          type="checkbox"
        />
      </div>
      <div className="NameAgeGeneral">
        <div className="NameAge">
          Name
          <input className="inp" onChange={nameOnChangeHandle} type="text" placeholder="Enter your name here" />
        </div>
        <div className="NameAge">
          Age
          <input className="inp" onChange={ageOnChangeHandle} type="number" placeholder="Enter your age here" />
        </div>
      </div>

      <div>
        <Button text="Submit" disabledbtn={emptyValidation} bgcolor="#48c78e" color="#f5f5f5" onclick={submitOnClickHandle}></Button>
      </div>
    </div>
  );
};
