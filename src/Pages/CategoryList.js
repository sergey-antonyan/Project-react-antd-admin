import React from 'react'
import { Table,  Space} from 'antd';
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
          <Table columns={[
            {title : "Category Name",
             dataIndex: "name"
            },
            {title : "Category",
             dataIndex: "id"
            },
          ]}
          dataSource={users.map(category => ({ ...category, key: category.id }))}
          >
          </Table>
        </Space>
    
  )
}

export default ProductList

