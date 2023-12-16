import React from "react";
import { useQuery, gql } from "@apollo/client";

const EXAMPLE_QUERY = gql`
query Company {
    company {
      ceo
      coo
      cto
      employees
      founded
    }
}
`;

const ExampleList = () => {
    const { loading, error, data } = useQuery(EXAMPLE_QUERY);
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <div>
            <p>{data.company.ceo}</p>
            <p>{data.company.cto}</p>
            <p>{data.company.employees}</p>
            <p>{data.company.founded}</p>
        </div>
    )
}

export default ExampleList;