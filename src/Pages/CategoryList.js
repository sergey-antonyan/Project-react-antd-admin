import React from 'react'
import { Table, Typography , Space} from 'antd';
import { useState , useEffect } from 'react';

const ProductList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/category');
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
            {title : "Product Name",
             dataIndex: "name"
            },
            {title : "Price",
             dataIndex: "impriceg"
            },
            {title : "Image",
             dataIndex: "img"
            },
            {title : "Quantity",
             dataIndex: "quantity"
            },
            {title : "Category",
             dataIndex: "categoryId"
            },
          ]}
          dataSource={users.map(category => ({ ...category, key: category.id }))}
          >
          </Table>
        </Space>
    
  )
}

export default ProductList

