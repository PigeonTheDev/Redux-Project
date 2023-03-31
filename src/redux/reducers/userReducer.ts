import { Reducer } from "redux";
import { User } from "../../userModal";

const initUser: User = {
  name: "Ulaş",
  age: 22,
  isActive: true,
  id: 0,
};

interface IAction {
  type: string;
  payload: any;
}

const userReducer: Reducer<User[], IAction> = (state: User[] = [initUser], action: IAction): User[] => {
  const users: User[] = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "USER_ADD":
      const userWithId = { ...action.payload, id: users[users.length - 1].id + 1 };
      users.push(userWithId);
      return users;
    case "USER_EDIT":
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === action.payload.id) {
          users[i] = action.payload;
          break;
        }
      }
      return users;
    case "USER_DELETE":
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === action.payload.id) {
          users.splice(i, 1);
          break;
        }
      }
      return users;
    default:
      return users;
  }
};

export default userReducer;
