import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Form, Icon, Input, Checkbox, InputNumber } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        comp_name: "",
        name: "",
        address: "",
        price:0
      }
    };
  }

  addCustomer = _ => {
    const { data } = this.state;
    fetch(`http://localhost:4000/AddCustomer?comp_name=${data.comp_name}&name=${data.name}&address=${data.address}&price=${data.price}`)
      .catch(err => console.error(err))
  }

  render() {
    const { data } = this.state;
    return (
      <div className='Title-text'>
        Add Customer
        <div className='Form_cont'>
          <div className='Form'>
          <div className='Input'>
              Company Name:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, comp_name: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Name:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, name: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Adress:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, address: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Price($):
        <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, price: e.target.value } })}
              />
            </div>
        
            <Link to="/ViewCustomer">
              <Button type="primary" onClick={this.addCustomer}>Add Customer</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}



export default AddCustomer;
