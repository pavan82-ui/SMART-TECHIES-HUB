import { useEffect, useState } from "react"
import store from "../../../core/shared/redux-store/redux-store";


export default function Sibling2() {

    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        const updateData = () => {
            const d = store.getState()?.txtdata;
            setData(d ?? null);
        };

        updateData();
        const unsubscribe = store.subscribe(updateData);

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            Sibling2 {data}
        </div>
    );
}