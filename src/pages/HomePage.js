import React, { Component } from "react";
import { Action } from "../redux/storereducer";
import { getCategory } from "../redux/asyncQueries";
import { connect } from "react-redux";

import TopSection from "../components/homePage/TopSection";
import FeatureSection from "../components/homePage/FeatureSection";

let { setActive } = Action;

export class HomePage extends Component {
  componentDidMount() {
    let categoryName = this.props.name;
    if (categoryName === undefined) {
      this.props.getCategory("all");
      return;
    }
    this.props.getCategory(categoryName);
    this.props.setActive(categoryName);
  }
  render() {
    return (
      <>
        <TopSection />
        <FeatureSection />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (name) => {
      dispatch(getCategory(name));
    },
    setActive: (name) => {
      dispatch(setActive(name));
    },
  };
};

const mapStateToProps = (state) => {
  const { categoryName, Active } = state.shop;
  return {
    categoryName: categoryName,
    Active,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
