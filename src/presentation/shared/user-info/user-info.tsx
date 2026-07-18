import type { User } from "../../../domain/entities/interfaces/user";
import type { UserProps } from "../../../domain/entities/interfaces/user-props";
import React from "react";

  function UserInfo({user}:UserProps) {

    console.log("user",1);
    return (
       <tr>
        <td>{user.id}</td>
        <td>{user.firstName} </td>  
        {/* // if u keep firstnaame it won't show any error.js is dymaic type  thers is no type safety */}
        {/* in domain entity layer we should mention type safety */}
        <td>{user.email}</td>
       </tr>
    )
}
 export default  React.memo(UserInfo);