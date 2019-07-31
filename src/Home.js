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
            <Button type="primary">View Employees</Button>
          </Link>
          <Link to="/ViewCustomer">
            <Button type="primary">View Customers</Button>
          </Link>
          <Link to="/ViewVendor">
            <Button type="primary">View Vendors</Button>
          </Link>
        </div>
        <div className='Menu_1'>
          <Link to="/AddEmployee">
            <Button type="primary">Add Employee</Button>
          </Link>
          <Link to="/AddCustomer">
            <Button type="primary">Add Customer</Button>
          </Link>
          <Link to="/AddVendor">
            <Button type="primary">Add Vendor</Button>
          </Link>
        </div>
        <div className='Menu_1'>
          <Link to="/PayEmployee">
            <Button type="primary">Pay an Employee</Button>
          </Link>
          <Link to="/CreateInvoice">
            <Button type="primary">Create Invoice</Button>
          </Link>
          <Link to="/AddVendor">
            <Button type="primary">Add Vendors</Button>
          </Link>
        </div>
        <div className='Menu_1'>
          <Link to="/ViewPaymentRoll">
            <Button type="primary">View Payroll Event</Button>
          </Link>
          <Link to="/ViewInvoiceHistory">
            <Button type="primary">View Invoice History</Button>
          </Link>
          
          <Link to="/ViewInventory">
            <Button type="primary">View Inventory</Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
