import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";


const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

export const UsersApp = () => {
    
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const handlerAddUser = (user) => {
        //console.log(user)
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }
    
    const handlerRemoveUser = (id) => {
        //console.log(id)
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">

                <div className="col">
                    <UserForm handlerAddUser={handlerAddUser}/>
                </div>
                <div className="col">
                    <UsersList 
                    handlerRemoveUser={handlerRemoveUser}
                    users={users}/>
                </div>

            </div>
        </div>
    );
}