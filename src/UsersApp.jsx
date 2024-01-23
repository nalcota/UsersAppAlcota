import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";


export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,

    } = useUsers();

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">

                <div className="col">
                    <UserForm
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm} 
                        userSelected={userSelected}/>
                </div>
                <div className="col">
                    {users.length === 0 ?
                        <div className="alert alert-warning"> No hay usuarios Registrados !</div>
                        :
                        <UsersList
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}
                            users={users} />}

                </div>

            </div>
        </div>
    );
}