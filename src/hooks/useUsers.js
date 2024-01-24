import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);




    const handlerAddUser = (user) => {
        //console.log(user)
        let type;

        if (user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser'
        }

        dispatch({
            type,
            payload: user,
        });

        Swal.fire({
            title:
                (user.id === 0) ?
                    "Usuario Creado" :
                    'Usuario Actualizado',
            text:
                (user.id === 0) ?
                    "El usuario a sido creado con exito!" :
                    'El usuario ha sido actualizado con exito',
            icon: "success"
        });
    }

    const handlerRemoveUser = (id) => {
        //console.log(id)
        Swal.fire({
            title: "Esta seguro que desea eliminar el usuario?",
            text: "Cuidado el usuario sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });

              Swal.fire({
                title: "Usuario Eliminado!",
                text: "El usuario ha sido eliminado con exito",
                icon: "success"
              });
            }
          });
    }

    const handlerUserSelectedForm = (user) => {
        //console.log(user)
        setUserSelected({ ...user });
    }
    return {
        users,
        userSelected,
        initialUserForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm

    }
}