import { Modal as MuiModal, ModalProps as MuiModalProps } from "@mui/material";
import { GrClose as Close} from "react-icons/gr";
import { Button } from "../Button";
import "./styles.css"
import "./createNewUserStyle.css"

export interface ModalTypes {
  createNewUser: () => JSX.Element;
}

export interface ModalProps extends Omit<MuiModalProps, "children">  {
  type: keyof ModalTypes;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const handleType: ModalTypes = {
    createNewUser: () => (
      <div className="modal-createNewUser-container">
        <div className="modal-createNewUser-header">
          <label className="modal-createNewUser-title"> Create New User </label>
          <Close className="modal-createNewUser-close-button" onClick={props.onClose}/>
        </div>
        
        <label className="modal-createNewUser-label"> Name </label>
        <input className="modal-createNewUser-input"/>

        <div className="modal-createNewUser-grow-div">
          <Button className="modal-createNewUser-button"> Create new User</Button>
        </div>
      </div>
    )
  }

  return (   
    <MuiModal {...props}>
      {handleType[props.type]()}
    </MuiModal>
  )
}

export { Modal };