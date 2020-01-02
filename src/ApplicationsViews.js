import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import RealEstateList from "./components/propertylist";
import RealEstateForm from "./components/propertyform"

const ApplicationViews = () => {
    return (
      <React.Fragment>
        {
          <Route
            exact
            path="/"
            render={props => {
              return( <>
              <RealEstateList  {...props}/>
              </> )
            }}
          />
        }
        {
          <Route
            exact
            path="/propertyform"
            render={props => {
              return( <>
              <RealEstateForm {...props} />
              </> )
            }}
          />
        }
        
      </React.Fragment>
    );
  };
  
  export default withRouter(ApplicationViews);