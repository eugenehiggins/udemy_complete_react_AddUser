import {Card} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import MyButton from './Button';
import classes from "./ErrorModal.module.scss";

const Backdrop = (props) => {

    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>

        </div>
    )
}

export default Backdrop;

const ErrorModal = (props) => {
    const handleHide = (event) => {
        props.setError("")
    }
    console.log("show", props.error)
    return (
        <Modal
            show={props.error ? true:false}
            className={classes.modal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title className={classes.header}>
                    {props.error["title"]}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{props.error["errorMessage"]}</p>
            </Modal.Body>

            <Modal.Footer>
                <MyButton variant="secondary" onClick={handleHide}>Close</MyButton>
            </Modal.Footer>

        </Modal>
    )
}

export default ErrorModal;
