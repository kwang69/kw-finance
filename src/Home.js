import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Home.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <div className='Menu'>
          <div className='Menu_1'>
            <Link to="/ViewEmployee">
              <Button type="primary">View Employee</Button>
            </Link>
            <Link to="/AddEmployee">
              <Button type="primary">View Customers</Button>
            </Link>
            <Link to="/AddEmployee">
              <Button type="primary">VIew Vendors</Button>
            </Link>
          </div>
          <div className='Menu_1'>
            <Link to="/AddEmployee">
              <Button type="primary">Add Employee</Button>
            </Link>
            <Link to="/AddEmployee">
              <Button type="primary">Add Customers</Button>
            </Link>
            <Link to="/AddEmployee">
              <Button type="primary">Add Vendors</Button>
            </Link>
          </div>
        </div>
    );
  }
}
export default Home;
