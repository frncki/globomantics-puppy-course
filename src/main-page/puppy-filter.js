import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import PuppyContext from "../context/puppyContext";

const PuppyFilter = () => {
    const history = useHistory();
    const allPuppies = useContext(PuppyContext);

    const countries = allPuppies
        ? Array.from(new Set(allPuppies.map((pup) => pup.country)))
        : [];

    const [chosenCountry, setChosenCountry] = useState()

    const onSearchChange = () => {
        const path = chosenCountry ? `/searchresults/${chosenCountry}` : '/'
        history.push(path);
    }

    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream puppy in country:
            </div>
            <div className="col-md-4 mb-3">
                <div className="input-group">
                    <select className="form-select" onChange={({ target }) => {
                        setChosenCountry(target.value)
                        console.log(target.value)
                    }}>
                        <option value="">Home</option>
                        {countries.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={onSearchChange}
                    >
                        {chosenCountry ? `Select ${chosenCountry} puppies` : 'Go Home'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PuppyFilter;