

export function UserInfo({user}:any) {

    return (
       <tr>
        <td>{user.id}</td>
        <td>{user.firstName} {user.lastName}</td>  
        {/* // if u keep firstnaame it won't show any error.js is dymaic type  thers is no type safety */}
        {/* in domain entity layer we should mention type safety */}
        <td>{user.email}</td>
       </tr>
    )
}