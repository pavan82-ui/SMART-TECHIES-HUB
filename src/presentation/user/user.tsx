import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import UserInfo from "../shared/user-info/user-info";
import { getUsers, searchUsers } from "../../application/user/user.service";
export function User() {
    const [users, setUsers] = useState<any[]>([]);
    const [searchUserValue, setSearchUserValue] = useState("");
    const [cnt, setcnt] = useState(0);
    const [count,setCount] = useState(0);
    const debouncedSearch = useRef<((searchVal: string) => void) | null>(null);

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
        let res = await getUsers(); //this will wait until we get daat from url
        setUsers(res.users);
    }

    function download() {
        window.print()
    }

    // async function search(event: any) {
    //     setTimeout(async () => {
    //         const searchTerm = event.target.value;
    //         let res = await searchUsers(searchTerm);
    //         setUsers(res.users);
    //     }, 1000);

    // }

    // async function search(event: ChangeEvent<HTMLInputElement>) {
    //     if (searchTimeoutRef.current) {
    //         clearTimeout(searchTimeoutRef.current);
    //     }

    //     searchTimeoutRef.current = window.setTimeout(async () => {
    //         const searchTerm = event.target.value;
    //         const res = await searchUsers(searchTerm);
    //         setUsers(res.users);
    //     }, 1000);
    // }
    function debounce(timeperiod: number) {
        let timeoutId: number | null = null;
        return function (searchVal: string) {
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
            timeoutId = window.setTimeout(async () => {
                const res: any = await searchUsers(searchVal);
                console.log("res", res);
                setUsers(res?.users ?? []);
            }, timeperiod);
        }
    }

    if (!debouncedSearch.current) {
        debouncedSearch.current = debounce(5000);
    }

    useEffect(() => {
        get();
        const interval = setInterval(() => {
            setcnt((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const filteredUsers = useMemo(() => {
        return searchUserValue
            ? users.filter((x) => x.firstName.toLowerCase().indexOf(searchUserValue.toLowerCase()) !== -1)
            : users;
    }, [users, searchUserValue]); // i want to fire this function only when users or searchUserValue changes, not on every render


 const dataFromChild=  useCallback (function(userRecord: any) {
        console.log("data from child", userRecord);
    },[])

    return (
        <>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
            User {cnt}
            <div>
                <input type="text" onChange={(event) => debouncedSearch.current?.(event.target.value)} />

            </div>
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
                        filteredUsers && filteredUsers.map((user) => {
                            return (
                                <UserInfo user={user} key={user.id}  copyData={(userRecord)=>dataFromChild(userRecord)}></UserInfo> // this only stops rerendering other code rerendering
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}