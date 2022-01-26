import classes from "./Button.module.scss";
import Button from 'react-bootstrap/Button';

const MyButton = (props) => {
    return (
        <>
            <Button type={props.type || 'button'}
                    className={classes.button}
                    onClick={props.onClick}
            >{props.children}</Button>
        </>
    )
}

export default MyButton;