import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {AiOutlineDashboard , AiOutlineShoppingCart, AiOutlineUser, AiOutlineFolderAdd, AiOutlineUnorderedList} from "react-icons/ai";
import{BiCategory} from "react-icons/bi";
import { MdOutlineChangeCircle , MdDeleteOutline } from "react-icons/md";
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="Logo">
          <h1>Admin Panel</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick= {({key}) =>{
            if(key === "signout"){

            }else{
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart />,
              label: 'Catalog',
              children: [{
                key: 'product',
                icon: <AiOutlineFolderAdd />,
                label: 'AddProduct',

              },
              {
                key: 'productList',
                icon: <AiOutlineUnorderedList />,
                label: 'ProductList',

              },
              {
                key: 'updateproduct',
                icon: <MdOutlineChangeCircle />,
                label: 'UpdateProduct',

              },
              {
                key: 'deleteproduct',
                icon: <MdDeleteOutline />,
                label: 'DeleteProduct',

              }]
            },
            {
              key: 'Categories',
              icon: <BiCategory />,
              label: 'Categories',
              children: [{
                key: 'category',
                icon: <AiOutlineFolderAdd />,
                label: 'AddCategory',

              },
              {
                key: 'categorylist',
                icon: <AiOutlineUnorderedList />,
                label: 'CategoryList',

              },
              {
                key: 'updateCategory',
                icon: <MdOutlineChangeCircle />,
                label: 'UpdateCategory',

              },
              {
                key: 'deletecategory',
                icon: <MdDeleteOutline />,
                label: 'DeleteCategory',

              }]
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;