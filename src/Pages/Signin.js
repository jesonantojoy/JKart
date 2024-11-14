import React from 'react'
import Button from '../component/Button';
import {Link} from 'react-router-dom'
import { Form } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import"../Pages/signin.css"

export default function Signin() {


    return (
      <section>
         <div className="design">
        <img src='jk-logo.jpg' id=''></img><h2>JK Kart</h2>
        </div>
        <div className="outer">
        <div className="card">
          <h1 className="text">Welcome to Movie Shows! Please Register </h1>
          <hr />
          <Form layout="vertical" className="mt-1" 
          
          //onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <input type="text" />
            </Form.Item>
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
              <Button fullWidth title="REGISTER" type="submit" />
              <Link to="login" className="text-primary">
                {" "}
                Already have an account? Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
      </section>
    )
}


