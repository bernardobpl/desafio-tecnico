import { User } from ".";
import { ReduxAction } from "../types";

export enum ActionTypes {
  SetUsers = "SET_USERS",
  CreatedUser = "CREATED_USER",
  DeleteUser = "DELETE_USER",
  SetOpenModal = "SET_OPEN_MODAL",
  SetNewUserName = "SET_NEW_USER_NAME",
}

const SetUsers = (userList: User[]): ReduxAction<User[]> => ({
  type: ActionTypes.SetUsers,
  payload: userList
})

const CreatedNewUser = (userList: User[]): ReduxAction<User[]> => ({
  type: ActionTypes.CreatedUser,
  payload: userList
});

const DeleteUser = (userList: User[]): ReduxAction<User[]> => ({
  type: ActionTypes.DeleteUser,
  payload: userList
});

const SetOpenModal = (isOpen: boolean): ReduxAction<boolean> => ({
  type: ActionTypes.SetOpenModal,
  payload: isOpen
});

const SetNewUserName = (name: string): ReduxAction<string> => ({
  type: ActionTypes.SetNewUserName,
  payload: name
});

export const UsersActions = {
  SetUsers,
  CreatedNewUser,
  DeleteUser,
  SetOpenModal,
  SetNewUserName,
};