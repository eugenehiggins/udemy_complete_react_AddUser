import React, {useState} from 'react';
import './index.scss'
import AddUser from './components/Users/AddUser';
import UserList from './components/UI/UserList';


function App() {
    const[users, setUsers] = useState([])
    return (
        <div>
            <AddUser setUsers={setUsers} users={users} />
            <UserList users={users} />
        </div>
    );
}

export default App;
