import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form, Alert } from 'antd';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Login = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const { username, password } = values;
    if (username === 'cmti@gmail.com' && password === 'password') {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: {
            role: 'admin',
            name: 'Admin User',
          },
        },
      });
      navigate('/dashboard/overview');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <Alert message={error} type="error" showIcon className="mb-4" />}
        <Form onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              className="border rounded w-full py-2 px-3"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              className="border rounded w-full py-2 px-3"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default Login;
