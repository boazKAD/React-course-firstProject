import Backdrop from './Backdrop';
import Modal from './Modal';
import { useState} from 'react'
function Todo (props){
    const [modalIsOpen,setmodalIsOpen]=useState(false);
    function deleteHendler() {
        setmodalIsOpen(true);
    }
    function closeModalHandler(){
        setmodalIsOpen(false);
    }
    
    return(
        <div className="card">
           <h2>{props.text}</h2>
           <div className="actions">
              <button className="btn" onClick={deleteHendler}>Delete</button>
           </div>
           {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
           {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>
    )
     
    
}
export default Todo;

