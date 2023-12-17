import React from "react";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const AppHeader = () => {
    return (
        <Header style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items1}
                onClick=""
                style={{
                    flex: 1,
                    minWidth: 0
                }}
            >
            </Menu>
        </Header>
    )
}

export default AppHeader;