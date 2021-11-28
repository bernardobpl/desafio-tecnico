import { Modal } from '../Modal';
import { useState } from 'react';
import { Button } from '../Button';
import { SubMenu } from '../SubMenu';
import './styles.css';

const SideMenu:React.FC = () => {
  const [openCreateNewUser, setOpenCreateNewUser] = useState(false);

  return (
    <div className="sidemenu-container">
      <span className="sidemenu-title"> My Demo Company </span>
      <Button 
        className="sidemenu-btn-create-user" 
        onClick={() => setOpenCreateNewUser(true)}
      > 
        Create new User 
      </Button>
      <SubMenu />
      <Modal 
        type="createNewUser" 
        open={openCreateNewUser} 
        onBackdropClick={()=>setOpenCreateNewUser(false)}
        onClose={()=>setOpenCreateNewUser(false)}
      />
    </div>
  )
}

export { SideMenu };