import type { User } from "../../../domain/entities/interfaces/user";
import type { UserProps } from "../../../domain/entities/interfaces/user-props";
import React from "react";

interface UserInfoProps extends UserProps {
  email: any;
  firstName: any;
  id: any | null | undefined;
  copyData: (user: User) => void;
}

//   function UserInfo({user ,copyData}:UserInfoProps) {

//     console.log("user",1);
//     return (
//        <tr key={user.id}   onClick={() => copyData(user)}>
//         <td>{user.id}</td>
//         <td>{user.firstName} </td>  
//         {/* // if u keep firstnaame it won't show any error.js is dymaic type  thers is no type safety */}
//         {/* in domain entity layer we should mention type safety */}
//         <td>{user.email}</td>
//        </tr>
//     )
// }

function UserInfo(props: UserInfoProps) {

   console.log("user", 1);
   return (
      <tr key={props.id} onClick={() => props.copyData(props as any)}>
         <td>{props.id}</td>
         <td>{props.firstName} </td>
         {/* // if u keep firstnaame it won't show any error.js is dymaic type  thers is no type safety */}
         {/* in domain entity layer we should mention type safety */}
         <td>{props.email}</td>
      </tr>
   );
}
 export default  React.memo(UserInfo);