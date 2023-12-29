import React from 'react';
import styles from './dragons.module.css';
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row, Modal, Spin } from 'antd';

const DRAGONS_QUERY = gql`
query Dragons {
  dragons {
    active
    crew_capacity
    description
    dry_mass_kg
    dry_mass_lb
    first_flight
    id
    name
    orbit_duration_yr
    type
    wikipedia
  }
}
`

const DragonsList = () => {
  const { loading, error, data } = useQuery(DRAGONS_QUERY);

  if (loading) return <div><Spin /></div>
  if (error) return <p>Error</p>

  return (
      <>
          <Row gutter={16}>
              {data.dragons.map(d => {
                  return (<Col span={8} key={d.id}>
                      <Card style={{ marginTop: '10px' }} type="inner" title={d.id}>
                          {/* <p>Landings {d.landings ? d.landings : 'NA'}</p>
                          <p>Original launch {d.original_launch ? d.original_launch : 'NA'}</p>
                          <p>Type {d.type ? d.type : 'NA'}</p> */}
                      </Card>
                  </Col>)
              })}
          </Row>
      </>
  )
}

export default DragonsList;
