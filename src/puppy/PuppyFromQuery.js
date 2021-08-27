import { useParams } from "react-router-dom";
import Puppy from "./"
import { useContext } from "react";
import PuppyContext from "../context/puppyContext";

const PuppyFromQuery = () => {
    const { id } = useParams();
    const allPuppies = useContext(PuppyContext);
    const puppy = allPuppies.find((pup) => pup.id === parseInt(id));

    if (!puppy) return <div>Puppy not found</div>
    return <Puppy puppy={puppy} />;
}

export default PuppyFromQuery;