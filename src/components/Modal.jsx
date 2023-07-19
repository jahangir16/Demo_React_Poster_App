/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({children}){
   const navigate= useNavigate(); 
    function closeHandler(){
        navigate('..'); //this dots refer to its parent route
    }
    return(
       <div className={classes.backdrop} onDoubleClick={closeHandler}>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
       </div>
    );
}
export default Modal;