import { getData }   from "../../infrastructure/api-context/api-context";

   export async function getUsers()
{
    return  await getData("https://dummyjson.com/users");
}

export async function searchUsers(searchTerm:string)
{   
    const url = "https://dummyjson.com/users/search?q="+searchTerm;
    return  await getData(url);
}