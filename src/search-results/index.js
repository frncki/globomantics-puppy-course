import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PuppyContext from "../context/puppyContext";

const SearchResults = () => {
  const allPuppies = useContext(PuppyContext);
  const { country } = useParams();
  const filteredPuppies = allPuppies.filter((pup) => pup.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredPuppies.map((pup) => (
            <SearchResultsRow key={pup.id} puppy={pup} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
