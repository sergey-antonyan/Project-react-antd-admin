import React from 'react'
import { Table, Typography , Space} from 'antd';
import { useState , useEffect } from 'react';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  
  
  return (
    
        <Space size={20}>
          <Typography.Title level={4}>Inventory</Typography.Title>
          <Table columns={[
            {title : "User Name",
             dataIndex: "userName"
            },
            {title : "First Name",
             dataIndex: "firstName"
            },
            {title : "Last Name",
             dataIndex: "lastName"
            },
            {title : "Email",
             dataIndex: "email"
            },
            {title : "Is verified",
             dataIndex: "is_verified"
            },
          ]}
          dataSource={users.map(user => ({ ...user, key: user.id }))}
          >
          </Table>
        </Space>
    
  )
}

export default Users

// {title : "Product_Name",
//              dataIndex: "name"
//             },
//             {title : "Price",
//              dataIndex: "price"
//             },
//             {title : "Image",
//              dataIndex: "img"
//             },
//             {title : "Quantity",
//              dataIndex: "quantity"
//             },
//             {title : "Category",
//              dataIndex: "categoryId"
//             },