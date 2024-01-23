import { UserRow } from "./UserRow"

export const UsersList = ({ handlerRemoveUser, handlerUserSelectedForm, users = [] }) => {

    return (
        <>
            <p>Listado de usuarios</p>
            <table className="table table-hover table-striped">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>email</th>
                        <th>update</th>
                        <th>remove</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        users.map(({id, username, email, password}) => (
                            <UserRow 
                            key={id} 
                            id={id} 
                            username={username} 
                            email={email}
                            password={password}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}/>
                        ))
                    }

                </tbody>


            </table>
        </>
    )

}

