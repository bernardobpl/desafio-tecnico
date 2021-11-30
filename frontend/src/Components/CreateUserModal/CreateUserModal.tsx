import { Modal } from "@mui/material";
import { GrClose as Close} from "react-icons/gr";
import { Button } from "../Button";
import "./styles.css"

export interface CreateUserModalProps {
  open: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
  onCreate: (name: string) => void;
  onClose: (isOpen: boolean) => void;
}

const CreateUserModal = ({open, inputValue, onInputChange, onCreate, onClose }: CreateUserModalProps) => {

  return (   
    <Modal 
      open={open} 
      onBackdropClick={() => onClose(false)}
    >
      <div className="modal-createNewUser-container">
        <div className="modal-createNewUser-header">
          <label className="modal-createNewUser-title"> Create New User </label>
          <Close className="modal-createNewUser-close-button" onClick={() => onClose(false)}/>
        </div>
        
        <label className="modal-createNewUser-label"> Name </label>
        <input className="modal-createNewUser-input" value={inputValue} onChange={(e) => onInputChange(e.target.value)}/>

        <div className="modal-createNewUser-grow-div">
          <Button 
            className="modal-createNewUser-button"
            onClick={() => onCreate(inputValue)}
          > 
            Create new User
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export { CreateUserModal };