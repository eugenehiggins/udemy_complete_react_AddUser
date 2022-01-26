import {ListGroup} from 'react-bootstrap';
import {useEffect} from 'react';

import classes from './UserList.module.scss';

const UserList = (props) => {

    if (props.users.length === 0) {
        return <h2>nothing here</h2>
    } else {
        return (
            <ListGroup className={classes.users}>
                {props.users.map((user) => {
                    return (
                        <ListGroup.Item key={user.username}>
                        {user.username} is {user.age}
                    </ListGroup.Item>)
                })})
                
                {/*<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>*/}
                {/*<ListGroup.Item>Morbi leo risus</ListGroup.Item>*/}
                {/*<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>*/}
                {/*<ListGroup.Item>Vestibulum at eros</ListGroup.Item>*/}
            </ListGroup>
        )
    }


}

export default UserList