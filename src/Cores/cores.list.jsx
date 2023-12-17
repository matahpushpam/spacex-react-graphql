import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row, Modal, Spin } from 'antd';

const CORES_QUERY = gql`
query Cores($find: CoresFind) {
    cores(find: $find) {
        asds_attempts
        asds_landings
        block
        id
        original_launch
        reuse_count
        rtls_attempts
        rtls_landings
        status
        water_landing
    }
  }
`

const CoresList = () => {
    const { loading, error, data } = useQuery(CORES_QUERY);
    const [openModal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const showModal = (data) => {
        setModal(true);
        setModalData(data);
    };

    const closeModal = () => {
        setModal(false);
    }

    if (loading) return <Spin/>
    if (error) return <p>Error</p>

    return (
        <>
            <Row gutter={16}>
                {data.cores.map(d => {
                    return (<Col span={8} key={d.id}>
                        <Card style={{ marginTop: '10px' }}type="inner" title={d.id} extra={<a onClick={() => showModal(d)}>More</a>}>
                            <p>ASDS attempts {d.asds_attempts}</p>
                            <p>ASDS landings {d.asds_landings}</p>
                        </Card>
                    </Col>)
                })}
            </Row>
            <Modal title="Details" open={openModal} onCancel={closeModal} footer={null}>
                <p>Block {modalData.block}</p>
                <p>Reuse count {modalData.reuse_count}</p>
                <p>RTLS attempts {modalData.rtls_attempts}</p>
                <p>RTLS landings {modalData.rtls_landings}</p>
            </Modal>
        </>
    )
}

export default CoresList;