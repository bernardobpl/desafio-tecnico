import { CreateUser, SetOpenModal, SetUserName } from './api/UserManager';
import './App.css';
import { CreateUserModal } from './Components/CreateUserModal';
import { SideMenu } from './Components/SideMenu';
import { UserList } from './Components/UserList/UserList';
import { useUsers } from './hooks/useUsers';

const App = () => {
  const { openCreateUserModal, newUserName, dispatch } = useUsers();

  return (
    <div className="App">
      <SideMenu />
      <UserList />
      <CreateUserModal 
        open={openCreateUserModal}
        inputValue={newUserName}
        onInputChange={(name) => SetUserName(dispatch, name)}
        onClose={(isOpen) => SetOpenModal(dispatch, isOpen)}
        onCreate={(name) => CreateUser(dispatch, name)}
      />
    </div>
  );
}

export default App;
