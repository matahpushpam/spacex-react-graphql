import React from "react";
import { useQuery, gql } from "@apollo/client";

const CORES_QUERY = gql`
query Cores($find: CoresFind) {
    cores(find: $find) {
      asds_attempts
      asds_landings
      block
      id
      original_launch
      reuse_count
    }
  }
`

const CoresList = () => {
    const {loading, error, data} = useQuery(CORES_QUERY);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <>
            {data.cores.map(d => {
                return (
                    <p key={d.id}>{d.asds_attempts}</p>
                )
            })}
        </>
    )
}

export default CoresList;