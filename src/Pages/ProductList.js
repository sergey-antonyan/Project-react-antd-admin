import React from 'react'
import { Table, Typography , Space, Button, Form,Input} from 'antd';
import { useState , useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai'

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [editRow, setEditRow] = useState(null)
  const [form] = Form.useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (formSubmitted) {
      fetchproducts();
      setFormSubmitted(false);
    }
  }, [formSubmitted]);
  

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchproducts();
  }, []);

  const onFinish = async (values) =>{
    const updatedDataSource =[...products]
    const index = updatedDataSource.findIndex((user) => user.id === editRow)
    updatedDataSource.splice(index,1,{...values, key: editRow})
    setProducts(updatedDataSource)
    setEditRow(null)
  
    try {
      const response = await fetch(`http://localhost:5000/products/${editRow}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
      <div className='center'>
        <Form form={form} onFinish={onFinish}>
        <Space size={20}>
          <Typography.Title level={4} >Inventory</Typography.Title>
          <Table  columns={[
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
             width : 50,
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
                <Input />
                </Form.Item>
               )
              }else{
                return (
                <div style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <p>{text}</p>
                </div>
                )
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
              
              ><AiOutlineEdit/></Button>
              <Button type='link' htmlType='submit'><AiOutlineSave/></Button>
              <Button 
              type='link'
              onClick={() => handleDelete(record.id)}
              ><AiOutlineDelete/></Button>
              </>
             }
            },
          ]}
          dataSource={products.map(product => ({ ...product, key: product.id }))}
          >
          </Table>
        </Space>
        </Form>
     </div>
  )
}

export default ProductList

