import { UserForm } from "./components/UserForm";

export const UsersApp = () => {

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">

                <div className="col">
                    <UserForm />
                </div>
                <div className="col">
                    <UsersList />
                </div>

            </div>
        </div>
    );
}