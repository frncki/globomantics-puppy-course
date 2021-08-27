import { useMemo } from "react";

const useFeaturedPuppy = (allPuppies) => {
    const featuredPuppy = useMemo(() => {
        if (allPuppies.length) {
            const randomIndex = Math.floor(Math.random() * allPuppies.length);
            return allPuppies[randomIndex];
        }
    }, [allPuppies]);

    return featuredPuppy;
}

export default useFeaturedPuppy;