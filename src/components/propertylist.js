import React, {useState, useEffect} from "react"
import PropertyListCard from "./propertylistcard"





const RealEstateList = props => {

    const [property, setProperties] = useState([])

    const getProperties = () => {
        fetch(`http://localhost:8000/properties`, {
          method: "GET",
          headers: {
            
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        })
          .then(response => response.json())
          .then(setProperties)  
      }

    useEffect(getProperties, [])

    return (
        
            <PropertyListCard property={property} {...props} />
        
    )
}

export default RealEstateList