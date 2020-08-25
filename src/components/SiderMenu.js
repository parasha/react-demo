import React from 'react';
import { Menu } from 'antd';
const { SubMenu, ItemGroup, Item } = Menu;
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


function SiderMenu() {
  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        }
      >
        <ItemGroup key="g1" title="Item 1">
          <Item key="1">Option 1</Item>
          <Item key="2">Option 2</Item>
        </ItemGroup>
        <ItemGroup key="g2" title="Item 2">
          <Item key="3">Option 3</Item>
          <Item key="4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Item key="5">Option 5</Item>
        <Item key="6">Option 6</Item>
        <SubMenu key="sub3" title="Submenu">
          <Item key="7">Option 7</Item>
          <Item key="8">Option 8</Item>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span>
            <SettingOutlined />
            <span>Navigation Three</span>
          </span>
        }
      >
        <Item key="9">Option 9</Item>
        <Item key="10">Option 10</Item>
        <Item key="11">Option 11</Item>
        <Item key="12">Option 12</Item>
      </SubMenu>
    </Menu>
  )
}


export default SiderMenu