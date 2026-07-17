import { getData }   from "../../infrastructure/api-context/api-context";

   export async function getUsers()
{
    return  await getData("https://dummyjson.com/users");
}