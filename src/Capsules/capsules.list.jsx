import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row, Spin, Badge, Space } from 'antd';

const CAPSULES_QUERY = gql`
query Capsules {
    capsules {
      id
      landings
      original_launch
      reuse_count
      status
      type
    }
  }
`
const getStatus = (s) => {
    if(s == 'active') {
        return {backgroundColor: 'green'}
    } else if (s == 'destroyed') {
        return {backgroundColor: 'black'}
    } else {
        return {backgroundColor: 'red'}
    }
}

const CapsulesList = () => {
    const { loading, error, data } = useQuery(CAPSULES_QUERY);

    if (loading) return <div><Spin /></div>
    if (error) return <p>Error</p>

    return (
        <>
            <Row gutter={16}>
                {data.capsules.map(d => {
                    return (<Col span={8} key={d.id}>
                        <Card style={{ marginTop: '10px' }} type="inner" title={d.id}>
                            <p>Landings {d.landings ? d.landings : 'NA'}</p>
                            <p>Original launch {d.original_launch ? d.original_launch : 'NA'}</p>
                            <p>Type {d.type ? d.type : 'NA'}</p>
                            <div>Status
                                <Space><Badge
                                    style={getStatus(d.status)}
                                    count={d.status}
                                /></Space></div>
                        </Card>
                    </Col>)
                })}
            </Row>
        </>
    )
}

export default CapsulesList;