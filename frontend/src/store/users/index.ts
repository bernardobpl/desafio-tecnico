import { ReduxAction } from "../types";
import { ActionTypes } from "./actions";

export interface User {
  id: number;
  name: string;
}
export interface UsersState {
  users: User[];
  newUserName: string;
  openCreateUserModal: boolean;
  isFirstLoad: boolean;
}

const initialState: UsersState = {
  users: [],
  newUserName: "",
  openCreateUserModal: false,
  isFirstLoad: true
}

function usersReducer(state: UsersState = initialState, action: ReduxAction<unknown>): UsersState{
  switch(action.type){
    case ActionTypes.SetUsers: return {
      ...state,
      users: action.payload as User[],
      isFirstLoad: false
    }

    case ActionTypes.CreatedUser: return {
      ...state,
      users: [...action.payload as User[]],
      newUserName: "",
      openCreateUserModal: false
    }
      
    case ActionTypes.DeleteUser: return {
      ...state,
      users: [...action.payload as User[]]
    }

    case ActionTypes.SetOpenModal: return {
      ...state,
      openCreateUserModal: action.payload as boolean
    }

    case ActionTypes.SetNewUserName: return {
      ...state,
      newUserName: action.payload as string
    }

    default: return state;
  }
}

export default usersReducer;