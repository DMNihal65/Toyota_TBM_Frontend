import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Badge, Avatar, Menu, Dropdown } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { FaBars, FaTimes } from 'react-icons/fa';

const { Search } = Input;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item danger>
        <Link to="/login">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-sky-500 p-4 font-Rubik shadow-md relative transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold hover:text-sky-300 transition-colors duration-300">
          <Link to="/">Toyota TBM</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard/overview" className="text-white hover:text-sky-300 transition-colors duration-300">Dashboard</Link>
          <Link to="/cards/overview" className="text-white hover:text-sky-300 transition-colors duration-300">Cards</Link>
          <Link to="/profile" className="text-white hover:text-sky-300 transition-colors duration-300">Profile</Link>
          <Link to="/settings" className="text-white hover:text-sky-300 transition-colors duration-300">Settings</Link>
          <Search placeholder="Search" enterButton={<SearchOutlined />} className="rounded-md" />
          <Badge count={5}>
            <BellOutlined className="text-white text-xl" />
          </Badge>
          <Dropdown overlay={userMenu} placement="bottomRight">
            <Avatar size="large" icon={<UserOutlined />} className="cursor-pointer w-24" />
          </Dropdown>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none z-50"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-sky-900 bg-opacity-90 z-40 flex flex-col items-center space-y-4 pt-20 transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          type="button"
          className="absolute top-4 right-4 text-white focus:outline-none z-50"
        >
          <FaTimes className="text-xl" />
        </button>
        <Link
          to="/dashboard/overview"
          className="text-white text-xl hover:text-sky-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Dashboard
        </Link>
        <Link
          to="/cards/overview"
          className="text-white text-xl hover:text-sky-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Cards
        </Link>
        <Link
          to="/profile"
          className="text-white text-xl hover:text-sky-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Profile
        </Link>
        <Link
          to="/settings"
          className="text-white text-xl hover:text-sky-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Settings
        </Link>
        <Link
          to="/login"
          className="text-white text-xl hover:text-sky-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Logout
        </Link>
        <Search placeholder="Search" enterButton={<SearchOutlined />} className="w-11/12 rounded-md" />
        <Badge count={5}>
          <BellOutlined className="text-white text-xl" />
        </Badge>
        <Dropdown overlay={userMenu} placement="bottomRight">
          <Avatar size="large" icon={<UserOutlined />} className="cursor-pointer" />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
