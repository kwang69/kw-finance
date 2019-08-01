import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Input, Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Part',
    dataIndex: 'part',
    key: 'part',
  },
  {
    title: 'Price/Unit($)',
    dataIndex: 'ppu',
    key: 'ppu',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Value($)',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Re-Order',
    dataIndex: 'reorder',
    key: 'reorder',
  }
];

const columns_1 = [
  {
    title: 'Company Name',
    dataIndex: 'comp_name',
    key: 'comp_name',
  },
  {
    title: 'Part',
    dataIndex: 'part',
    key: 'part',
  },
  {
    title: 'Price($)/Unit',
    dataIndex: 'ppu',
    key: 'ppu',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }
];

class CreatePO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      vendor: [],
      pay_data: {
        part: "",
        quantity: 0,
        comp_name: ""
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewInventory')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    fetch('http://localhost:4000/ViewVendor_1')
      .then(response => response.json())
      .then(vendor => this.setState({ vendor }));
  }

  addHistory = _ => {
    const { pay_data } = this.state;
    const day = new Date();
    const date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate();
    const { data } = this.state.data;
    let price = 0;
    let j = 0;
    for (j = 0; j < data.length; j++) {
      if (data[j].part == pay_data.part) {
        price = data[j].ppu;
      }
    }
      fetch(`http://localhost:4000/AddPOHistory?date=${date}&comp_name=${pay_data.comp_name}&part=${pay_data.part}&quantity=${pay_data.quantity}&ppu=${price}&total=${pay_data.quantity*price}`)
        // .catch(err => console.error(err))
  }

  updateBS = _ => {
    const { pay_data } = this.state;
    const { data } = this.state.data;
    let price = 0;
    let j = 0;
    for (j = 0; j < data.length; j++) {
      if (data[j].part == pay_data.part) {
        price = data[j].ppu;
      }
    }
      fetch(`http://localhost:4000/updateBS_2?total=${pay_data.quantity*price}`)
  }

  createPO = _ => {
    const { pay_data } = this.state;
    fetch(`http://localhost:4000/CreatePO?part=${pay_data.part}&quantity=${pay_data.quantity}&comp_name=${pay_data.comp_name}`)
      .then(data => this.setState({ data }))
      .catch(err => console.error(err))
    this.addHistory()
    this.updateBS()
    window.location.reload()
  }



  render() {
    let { data } = this.state.data;
    let { vendor } = this.state.vendor;
    const { pay_data } = this.state;
    if (data != null) {
      data = data.slice(0, data.length - 1);
      let j;
      for(j = 0; j < data.length;j++){
        data[j].value = data[j].quantity * data[j].ppu;
      }
    }

    return (
      <div className='Title-text'>
        Create PO
        <div className='Form_cont'>
          <div className='Form'>
            <div className='Input'>
              Part Name:
        <Input placeholder="" onChange={e => this.setState({ pay_data: { ...pay_data, part: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Vendor Name:
        <Input placeholder="" onChange={e => this.setState({ pay_data: { ...pay_data, comp_name: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Amount:
        <Input placeholder="" onChange={e => this.setState({ pay_data: { ...pay_data, quantity: e.target.value } })}
              />
            </div>
            <Button type="primary" onClick={this.createPO} style={{ width: '15%' }}>Create PO</Button>
          </div>
        </div>
        Current Inventory
         <Table columns={columns} dataSource={data} />
        Current Vendors
         <Table columns={columns_1} dataSource={vendor} />
      </div>
    );
  }
}
export default CreatePO;
