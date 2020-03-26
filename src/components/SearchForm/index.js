import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Label ,Form, Segment, Dropdown, Button } from "semantic-ui-react";
import { setSelectedArea, setSelectedCategory, searchList } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import "./style.css";

function SearchForm() {
  const history = useHistory();
  const areaList = useSelector(state => state.serviceableAreas);
  const categoriesList = useSelector(state => state.categoriesList);
  const dispatch = useDispatch();
  const selectedArea = useSelector(state=>state.selectedArea);
  const selectedCategory = useSelector(state=>state.selectedCategory);

  const areaChangeHandler = (e, { value }) => {
    dispatch(setSelectedArea(value));
  };
  const categoryChangeHandler = (e, { value }) => {
    dispatch(setSelectedCategory(value));
  }

  const search = ()=>{
    if(!selectedArea) {
      window.alert("Please choose your Area");
      return;
    }
    if(!selectedCategory) {
      window.alert("Please choose what category of item yowant.");
      return;
    }
    dispatch(searchList());
    history.push("/results");
  }
  return (
    <div className="SearchForm">
      <h3>Search nearby essentials</h3>
      <Segment color="orange">
        <Form>
          <h4>Area</h4>
          <Dropdown fluid placeholder="Select Area" onChange={areaChangeHandler} options={areaList.map(e=>({
            key: e, text: e, value: e
          }))} value={selectedArea} search selection/>
          <h4>Item Category</h4>
          <Dropdown fluid placeholder="Select item" onChange={categoryChangeHandler} options={categoriesList.map(e=>({
            key: e, text: e, value: e
          }))} value={selectedCategory} search selection/>
        </Form>
        <br/>
        <br/>
        <Button fluid color="green" onClick={search} >Search</Button>
      </Segment>
    </div>
  );
}

SearchForm.defaultProps = {};

SearchForm.propTypes = {
};

export default SearchForm;
