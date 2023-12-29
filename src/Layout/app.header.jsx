import React from "react";
import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const items = ['cores', 'capsules', 'dragons'].map((key) => ({
  key,
  label: `${key.toUpperCase()}`,
}));

const AppHeader = () => {
    const navigate = useNavigate();
    return (
        <Header style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['nav cores']}
                items={items}
                onClick={({ key }) => navigate(`/${key}`)}
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