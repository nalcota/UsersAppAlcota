
import { LoginPage } from './auth/pages/LoginPage';
import { Navbar } from './components/layout/Navbar';
import { UsersPage } from './pages/UsersPage';
import { useAuth } from './auth/hooks/useAuth';


export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();


    return (
        <>
            {
                login.isAuth
                    ? (
                        <>
                            <Navbar login={login} handlerLogout={handlerLogout} />
                            <UsersPage />
                        </>
                    )
                    : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}