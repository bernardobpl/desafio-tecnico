import { Dispatch } from "redux";
import { ReduxAction } from "../store/types";
import { User } from "../store/users";
import { UsersActions } from "../store/users/actions";
import { CreateUserService, DeleteUserService } from "./UserService";

const SetUsers = (dispatch: Dispatch<ReduxAction<unknown>>, userList: User[]) => {
  dispatch ( UsersActions.SetUsers(userList) );
};

const SetOpenModal = (dispatch: Dispatch<ReduxAction<unknown>>, isOpen: boolean) => {
  dispatch( UsersActions.SetOpenModal(isOpen) )
}

const SetUserName = (dispatch: Dispatch<ReduxAction<unknown>>, name: string) => {
  dispatch( UsersActions.SetNewUserName(name) );
}

const CreateUser = async (dispatch: Dispatch<ReduxAction<unknown>>, newUserName: string) => {
  const response = await CreateUserService(newUserName);
  dispatch( UsersActions.CreatedNewUser(response.data) );
}

const DeleteUser = async (dispatch: Dispatch<ReduxAction<unknown>>, userId: number) => {
  const response = await DeleteUserService(userId);
  dispatch( UsersActions.DeleteUser(response.data) );
}

export {
  SetUsers,
  SetOpenModal,
  SetUserName,
  CreateUser,
  DeleteUser
}