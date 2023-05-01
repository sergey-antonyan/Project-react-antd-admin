import {

  Button,
  Form,
  Input
} from "antd";



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrRegistererCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrRegistererCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const AddProduct = () => {
  const [form] = Form.useForm();

 

 
  async function addProduct(value) {
    console.log(value);
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
          Authorization: localStorage.getItem("jwt"),
        },
      });
  
      const data = await response.json();
      if (data.message === "Created") {
         const successMessage = document.getElementById("success-message");
      successMessage.textContent = "Product created successfully!";
      }
    } catch (error) {
      console.log("An error occurred while creating the product:", error);
    }
  }
  
  
  
  
  
  
  return (
    <div  className="registerCont">
      <div className="registerChild">
    <Form
    id="success-message"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={addProduct}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h1>Add Product</h1>
    <Form.Item
        name="name"
        label="Product Name"
        tooltip="What is your products name?"
        rules={[
          {
            required: true,
            message: "Please input your product name!",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
            message: "Please input your product's price!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="img"
        label="Image"
        rules={[
          {
            required: true,
            message: "Please input your image URL !",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>   
      

      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[
          {
            required: true,
            message: "Please input product's quantity",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="categoryId"
        label="Category ID"
        rules={[
          {
            required: true,
            message: "Please input your Category ID !",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
    </div>
  </div>
  );
};
export default AddProduct;
