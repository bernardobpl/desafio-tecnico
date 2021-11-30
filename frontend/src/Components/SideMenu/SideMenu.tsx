import { SetOpenModal } from '../../api/UserManager';
import { useUsers } from '../../hooks/useUsers';
import { Button } from '../Button';
import { SubMenu } from '../SubMenu';
import './styles.css';

const SideMenu:React.FC = () => {
  const { dispatch } = useUsers();

  return (
    <div className="sidemenu-container">
      <span className="sidemenu-title"> My Demo Company </span>
      <Button 
        className="sidemenu-btn-create-user" 
        onClick={() => SetOpenModal(dispatch, true)}
      > 
        Create new User 
      </Button>
      <SubMenu />
      
    </div>
  )
}

export { SideMenu };

