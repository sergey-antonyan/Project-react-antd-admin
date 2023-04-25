import {

  Button,
  Checkbox,
  Form,
  Input
} from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"


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
const Register = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate()

 
  async function submitRegister(value){
    console.log(value)
      const response = await fetch("http://localhost:5000/register" , {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
         },
        
      })

      const data = await response.json();
      if(data.message === "User created"){
          navigate('/login')
      }
 
  }
  
  
  
  
  
  return (
    <div className="registerCont">
      
      <div className="registerChild">
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={submitRegister}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h1>Create Account</h1>
    <Form.Item
        name="userName"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>   
      

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <strong>agreement</strong>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <p>Have an Account?</p>
        <br/> <Link to={"/login"}>Login</Link>
      </Form.Item>
    </Form>
    </div>
  </div>
  );
};
export default Register;
