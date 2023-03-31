import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { GlobalState } from "../../redux/reducers";
import { USER_EDIT } from "../../redux/userAction";
import { User } from "../../userModal";
import { Button } from "../../components/Button/Button";
import "./EditPage.css";

export const EditPage2 = () => {
  const users = useSelector((state: GlobalState) => state.users);

  const history = useHistory();

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const userId: number = parseInt(id);
  const user = users.find((user) => userId === user.id);

  const [emptyValidation, setEmptyValidation] = useState<boolean>(true);
  const [userFormData, setUserFormData] = useState<User>(user!);
  /* const ensure = (user: User | undefined) => {
    if (user === undefined || user === null) {
      throw new TypeError("message");
    }

    return user;
  }; */

  //const user: User | undefined = users.find((user) => userId === user.id);

  if (userFormData === undefined || null) {
    history.push("/");
  }

  const areDiffObject = (prevObject: User, currentObject: User | undefined) => {
    const prevObjectString = JSON.stringify(prevObject);
    const currentObjectString = JSON.stringify(currentObject);

    if (prevObjectString !== currentObjectString) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const areUsersDifferent = areDiffObject(userFormData, user);

    setEmptyValidation(!areUsersDifferent);
  }, [user, userFormData]);

  const nameOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData((prevValue) => ({ ...prevValue, name: e.target.value }));
  };

  const ageOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          Name <input className="inp" onChange={nameOnChangeHandle} type="text" value={userFormData.name} />
        </div>
        <div className="NameAge">
          Age <input className="inp" onChange={ageOnChangeHandle} type="number" value={userFormData.age.toString()} />
        </div>
      </div>
      <div>
        <Button text="Confirm" disabledbtn={emptyValidation} bgcolor="#48c78e" color="#f5f5f5" onclick={confirmOnHandle}></Button>
      </div>
    </div>
  );
};
