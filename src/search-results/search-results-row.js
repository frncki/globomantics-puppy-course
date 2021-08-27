import { useHistory } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ puppy }) => {
  const history = useHistory();

  const setActive = () => {
    history.push(`/puppy/${puppy.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{puppy.address}</td>
      <td>{puppy.price}</td>
      <td>{puppy.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
