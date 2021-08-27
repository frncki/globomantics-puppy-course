import './main-page.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FeaturedPuppy from './featured-puppy';
import SearchResults from '../search-results';
import PuppyFilter from "./puppy-filter"
import PuppyFromQuery from "../puppy/PuppyFromQuery"
import usePuppies from '../hooks/usePuppies';
import useFeaturedPuppy from '../hooks/useFeaturedPuppy';
import PuppyContext from '../context/puppyContext';

function App () {
  const allPuppies = usePuppies();
  const featuredPuppy = useFeaturedPuppy(allPuppies);

  return (
    <Router>
      <PuppyContext.Provider value={allPuppies}>
        <div className="container">
          <Header subtitle="Providing puppies all over the world!" />
          <PuppyFilter />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>

            <Route path="/puppy/:id">
              <PuppyFromQuery />
            </Route>

            <Route path="/">
              <FeaturedPuppy puppy={featuredPuppy} />
            </Route>
          </Switch>
        </div>
      </PuppyContext.Provider>
    </Router>
  );
}

export default App;
