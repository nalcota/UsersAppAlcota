import { useState } from "react"

export const RegisterPage = ({ handlerAddUser, initialUserForm}) => {

    const [userSelected, setUserSelected] = useState(initialUserForm)

    return (
        <div className="container my-4">
            <h4>
                Regitro de usuarios
            </h4>
            <div className="row">
                <div className="col">
                    <UserForm userSelected={userSelected} 
                    handlerAddUser={handlerAddUser} 
                    initialUserForm={initialUserForm} />
                </div>
            </div>

        </div>
    )
}