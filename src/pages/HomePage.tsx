import { useState } from "react";
import { useDebounce } from "../shared/hooks/useDebounce";

const HomePage = () => {
    const [query, setQuery] = useState<string>("");
    const debounced = useDebounce(query, 400);
    console.log(`Debounced: ${debounced}`);
    return(
        <input value={query} onChange ={(event => setQuery(event.target.value))} placeholder="Pisz szybko..." className="p-2 zinc-800 text-white rounded"/>
    )
}
export default HomePage;