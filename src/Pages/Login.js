
import React from 'react'
import Button from '../component/Button';
import {Form} from "antd";
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Pages/login.css"

export default function Login () {

 

  return (

    <section>
        <div className="embulum">
        <img src='jk-logo.jpg'></img><h2>JK Kart</h2>
        </div>
      
  
    <div className="outer">
    <div className="card">
      <h1 className="text">Welcome Again! Please Login</h1>
      <hr />
      <Form layout="vertical" className="mt-1"
      // onFinish={onFinish}
       >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <input type="password" />
        </Form.Item>

        <div className="flex flex-col mt-2 gap-1">
          <Button fullWidth title="LOGIN" type="submit" />
          <Link to="signin" className="text-primary">
            {" "}
            Don't have an account? Register
          </Link>
        </div>
      </Form>
    </div>
  </div>
  </section>
  )
}

      
