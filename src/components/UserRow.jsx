export const UserRow = ({handlerRemoveUser, id, username, email}) => {

    const onRemoveuser = (id) => {
        handlerRemoveUser(id);
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm">
                    update

                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveuser(id)}>
                    remove

                </button>
            </td>
        </tr>
    )
}