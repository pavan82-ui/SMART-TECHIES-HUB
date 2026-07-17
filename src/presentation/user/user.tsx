import { useEffect, useState } from "react"
import { UserInfo } from "../shared/user-info/user-info";
import { getUsers } from "../../application/user/user.service";
export function User() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        get();
    }, []);

    //   function getUsers() {
    //     const url = "https://dummyjson.com/users";
    //     let res = fetch(url).then((res) => res.json()).then((res) => {
    //         alert("1")

    //         setUsers(res);
    //     });
    //     alert("2");// alert 2 will fire first then alert1
    //     //call will call data after getting response and will continue next line of code
    //     // let res = await fetch(url); //this will wait until we get daat from url
    //     // let resjson = await res.json(); //raw json to JSON
    //     // setUsers(resjson.users);
    // }

    async function get() {
       // const url = "https://dummyjson.com/users";

        //sync await will wait for the response and then continue next line of code
        let res = await  getUsers(); //this will wait until we get daat from url
        setUsers(res.users);
    }


    return (
        <>
            User
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user)=>{
                            return (
                              <UserInfo user={user}></UserInfo>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}