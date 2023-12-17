import React from 'react';
import './App.css';
import CoresList from './Cores/cores.list';
import ExampleList from './Example/example.list';
import { Layout, theme } from 'antd';
import { Routes, Route } from 'react-router-dom'; 
import AppHeader from './Layout/app.header';
import AppSidebar from './Layout/app.sidebar';
import AppFooter from './Layout/app.footer';

const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="App">
      <Layout>
        <AppHeader></AppHeader>
        <Content style={{
          padding: '0 48px'
        }}>
          <Layout style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            <AppSidebar></AppSidebar>
            <Content
              style={{
                padding: '0 24px',
                minHeight: 280,
              }}
            >
              <Routes>
                <Route exact path="/" element={<CoresList />}></Route>
                <Route path="/example" element={<ExampleList />}></Route>
              </Routes>
            </Content>
          </Layout>
        </Content>
        <AppFooter></AppFooter>
      </Layout>
    </div>
  );
}

export default App;
