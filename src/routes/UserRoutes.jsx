import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"

export const UserRoutes = ({ login, handlerLogout }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerCloseForm,
        handlerOpenForm,

    } = useUsers();

    return (
        <>
            <Navbar login={login} handlerLogout={handlerLogout} />
            <Routes>

                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerCloseForm={handlerCloseForm}
                    handlerOpenForm={handlerOpenForm}

                />} />
                <Route path="users/register" element={<RegisterPage
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />

                <Route path="users/edit/:id" element={<RegisterPage
                    users= {users}
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}