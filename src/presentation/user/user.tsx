import { useEffect, useState } from "react"

export function User() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        getUsers();
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

    async function getUsers() {
        const url = "https://dummyjson.com/users";

        let res = await fetch(url); //this will wait until we get daat from url
        let resjson = await res.json(); //raw json to JSON
        console.log(resjson.users);
        setUsers(resjson.users);
        //sync await will wait for the response and then continue next line of code
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
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}