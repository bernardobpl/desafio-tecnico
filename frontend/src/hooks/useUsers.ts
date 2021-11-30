import { useEffect } from "react";
import { SetUsers } from "../api/UserManager";
import { User } from "../store/users";
import { useAppDispatch } from "./useDispatch";
import { useFetch } from "./useFetch";
import { useAppSelector } from "./useReducer";

const useUsers = () => {
  const { users, newUserName, openCreateUserModal, isFirstLoad } = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useFetch<User[]>("clients", undefined, isFirstLoad);
  
  useEffect(()=>{
    SetUsers(dispatch, data || []);
  },[data, dispatch]);

  return {
    users,
    isLoading, 
    error,
    newUserName, 
    openCreateUserModal,
    dispatch
  }
}

export { useUsers };

