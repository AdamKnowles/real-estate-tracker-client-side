import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import RealEstateList from "./components/propertylist";

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
        
      </React.Fragment>
    );
  };
  
  export default withRouter(ApplicationViews);