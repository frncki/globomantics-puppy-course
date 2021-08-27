import { useState, useEffect } from "react";

const usePuppies = () => {
    const [allPuppies, setAllPuppies] = useState([]);

    useEffect(() => {
        const fetchPuppies = async () => {
            const rsp = await fetch("/puppies.json");
            const puppies = await rsp.json();
            setAllPuppies(puppies);
        };
        fetchPuppies();
    }, []);

    return allPuppies;
}

export default usePuppies;