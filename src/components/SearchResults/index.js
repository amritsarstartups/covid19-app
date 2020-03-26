import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Segment, Icon } from "semantic-ui-react";
import "./style.css";

function SearchResults() {
  const history = useHistory();
  const results = useSelector(state => state.results);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const selectedArea = useSelector(state => state.selectedArea);
  useEffect(() => {
    if (!results || results.length === 0) {
      window.alert(
        "No results for your selected option. Search something else."
      );
      history.push("/");
    }
  }, [results]);
  return (
    <div className="SearchResults">
      {results && results.map(e => (
        <Card color="red">
          <Card.Content header={e.vendorName || `${selectedCategory} Vendor`} />
          <Card.Content description={e.address} />

          <Card.Content>
            <Icon name="phone" />
            <a href={`tel:${e.ph1}`}>
              {e.ph1}
            </a>,{ "  " } 
            {e.ph2 &&
            <a href={`tel:${e.ph2}`}>
              {e.ph2}
            </a>}
          </Card.Content>
          <Card.Content extra>
              <Icon name="map marker alternate" />
              {selectedArea}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

SearchResults.defaultProps = {};

SearchResults.propTypes = {};

export default SearchResults;

