
import { useTransition } from "react";

function SearchComponent() {
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        startTransition(() => {
            // api calling code goes here
            console.log("Search value:", value);
        });
    };

    return (
        <>
            <input onChange={handleChange} />
            {isPending && <p>Loading...</p>}
        </>
    );
}

export default SearchComponent;