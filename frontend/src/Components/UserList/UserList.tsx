import './styles.css';
import { UserListTable } from './UserListTable';

const UserList = () => {
  return (

    <div className="userlist-container">
      <span className="userlist-title"> User List </span>
      <UserListTable />
    </div>
  )
}  

export { UserList };

