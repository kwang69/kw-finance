import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';

class AddEmployee extends Component {
  render() {
    return (
      <div className="App">
        <div className='Menu'>
          <div className='Menu_1'>
            <Button type="primary">View Employee</Button>
            <Button type="primary">View Customers</Button>
            <Button type="primary">VIew Vendors</Button>
          </div>
        </div>
      </div>
    );
  }
}


export default AddEmployee;
