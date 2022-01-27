import { Form} from 'react-bootstrap';
import MyCard from '../UI/MyCard';
import classes from './AddUser.module.scss';
import MyButton from '../UI/Button';
import {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
    const initialState = {
        username: '',
        age: '',
    }

    const [formValues, setFormValues] = useState(initialState)
    const [error, setError] = useState("")

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    const handleConfirm = (event) => {
        return (
            <>

            </>
        )
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (formValues['username'].trim().length === 0) {
            setError({
                errorMessage: "You forgot the ding dang username!",
                title: "Invalid input"
            })
            return
        } else if (formValues['age'].trim().length === 0) {
            setError({
                errorMessage: "the gosh darn age is missing!",
                title: "invalid input"
            })

            return
        } else if ( formValues['age'] < 1) {
            setError({
                errorMessage: "Thunderation! Make the age higher than that Man!",
                title: "invalid input"
            })

            return
        }

        props.setUsers((initialUsers) => [...initialUsers, formValues])
        setFormValues(initialState)
    }

    return (
        <Wrapper>
            {error && <ErrorModal
                error={error}
                setError={setError}
                onConfirm={handleConfirm}
            />}
            <MyCard title="The title" header="The header" className={classes.input}>

                <Form onSubmit={addUserHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control
                            id="username"
                            name="username"
                            type="text"
                            onChange={handleInputChange}
                            value={formValues['username']}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="age">Age (Years)</Form.Label>
                        <Form.Control
                            id="age"
                            name="age"
                            type="number"
                            onChange={handleInputChange}
                            value={formValues['age']}
                        />
                    </Form.Group>
                    <MyButton
                        type="button"
                        onClick={addUserHandler}
                    >Add User</MyButton>
                </Form>
            </MyCard>
        </Wrapper>
    )
}

export default AddUser;