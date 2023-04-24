import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {useState} from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate()

  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [error, setError] = useState("")

  async function submitLogin(e){
    e.preventDefault();
      const response = await fetch("https://localhost:5000/login" , {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
         }),
         headers: {
          "Content-Type": "application/json ; charset=UTF-8",
         },
      })

   const data = await response.json();
    if(data.message === "Logged in" && data.role === 1){
      navigate("/admin")
    }else if(data.message === "Logged in" && data.role === 0 && data.is_verified === 1){
      navigate("/")
    }
 
  }

  

  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);}
  
  return (
    <div className='loginCont'>
      <div className='loginChild'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={submitLogin}
    >
      <h1>Welcome back</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input onChange={(e)=>setEmail(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          onChange={(e)=>setPassword(e.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          <Link to="/admin">
            Log in
          </Link>
        </Button>
        Don't have an account? <br/> <a href="/register">register now!</a>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default Login;
