import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Form, Icon, Input, Checkbox, InputNumber } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class AddVendor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        comp_name: "",
        part: "",
        ppu:0,
        address: ""
      }
    };
  }

  addVendor = _ => {
    const { data } = this.state;
    fetch(`http://localhost:4000/AddVendor?comp_name=${data.comp_name}&part=${data.part}&ppu=${data.ppu}&address=${data.address}`)
      .catch(err => console.error(err))
  }

  render() {
    const { data } = this.state;
    return (
      <div className='Title-text'>
        Add Vendor
        <div className='Form_cont'>
          <div className='Form'>
            <div className='Input'>
              Company Name:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, comp_name: e.target.value } })}
              />
            </div>
            <div className='Input' >
              Part:
        <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, part: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Price/Unit($):
        <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, ppu: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Adress:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, address: e.target.value } })}
              />
            </div>
            <Link to="/ViewVendor">
              <Button type="primary" onClick={this.addVendor}>Add Vendor</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}



export default AddVendor;
