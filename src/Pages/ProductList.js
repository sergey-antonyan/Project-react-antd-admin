import React from 'react'
import { Table, Typography , Space, Button, Form,Input} from 'antd';
import { useState , useEffect } from 'react';

const ProductList = () => {

  const [users, setUsers] = useState([]);
  const [editRow, setEditRow] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  

  const onFinish = (values) =>{
    const updatedDataSource =[...users]
    const index = updatedDataSource.findIndex((user) => user.id === editRow)
    updatedDataSource.splice(index,1,{...values, key: editRow})
    setUsers(updatedDataSource)
    setEditRow(null)
  }
  
  return (
      <div className='center'>
        <Form form={form} onFinish={onFinish}>
        <Space size={20}>
          <Typography.Title level={4} >Inventory</Typography.Title>
          <Table columns={[
            {title : "Product Name",
             dataIndex: "name",
             render:(text, record)=>{
              if(editRow === record.key){
               return (
               <Form.Item 
               name="name"
               rules = {[{
                required: true,
                message: "Please enter product name",
               }]}
               >
                <Input/>
                </Form.Item>
               )
              }else{
                return <p>{text}</p>
              }
             }
            },
            {title : "Price",
             dataIndex: "price",
             render:(text, record)=>{
              if(editRow === record.key){
               return (
               <Form.Item 
               name="price"
               rules = {[{
                required: true,
                message: "Please enter price",
               }]}
               >
                <Input/>
                </Form.Item>
               )
              }else{
                return <p>{text}</p>
              }
             }
            },
            {title : "Image",
             dataIndex: "img",
             render:(text, record)=>{
              if(editRow === record.key){
               return (
               <Form.Item 
               name="img"
               rules = {[{
                required: true,
                message: "Please enter img",
               }]}
               >
                <Input/>
                </Form.Item>
               )
              }else{
                return <p>{text}</p>
              }
             }
            },
            {title : "Quantity",
             dataIndex: "quantity",
             render:(text, record)=>{
              if(editRow === record.key){
               return (
               <Form.Item 
               name="quantity"
               rules = {[{
                required: true,
                message: "Please enter quantity",
               }]}
               >
                <Input/>
                </Form.Item>
               )
              }else{
                return <p>{text}</p>
              }
             }
            },
            {title : "Category",
             dataIndex: "categoryId",
             render:(text, record)=>{
              if(editRow === record.key){
               return (
               <Form.Item 
               name="categoryId"
               rules = {[{
                required: true,
                message: "Please enter category",
               }]}
               >
                <Input/>
                </Form.Item>
               )
              }else{
                return <p>{text}</p>
              }
             }
            },
            {title : "Actions",
             render:(_,record)=>{
              return <>
              <Button type='link' onClick={() => {
                setEditRow(record.key);
                form.setFieldsValue({
                  name:record.name,
                  categoryId:record.categoryId,
                  quantity:record.quantity,
                  img:record.img,
                  price:record.price
                })
              }}
              
              >Edit</Button>
              <Button type='link' htmlType='submit'>Save</Button>
              </>
             }
            },
          ]}
          dataSource={users.map(product => ({ ...product, key: product.id }))}
          >
          </Table>
        </Space>
        </Form>
     </div>
  )
}

export default ProductList

