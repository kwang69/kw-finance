import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Input, Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'comp_name',
    key: 'comp_name',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Price($)',
    dataIndex: 'price',
    key: 'price',
  },

];

class CreateInvoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      amount: [],
      pay_data: {
        comp_name: "",
        quantity: 0
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewCustomer')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    fetch('http://localhost:4000/ViewInventory_1')
      .then(response => response.json())
      .then(amount => this.setState({ amount }));

  }
  addHistory = _ => {
    const {pay_data}  = this.state;
    const day = new Date();
    const date = day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
    const {data} = this.state.data;
    let price = 0;
    let j = 0;
    for(j = 0; j < data.length; j++) {
      if (data[j].comp_name == pay_data.comp_name) {
        price = data[j].price;
      }
    } 

    fetch(`http://localhost:4000/AddHistory?date=${date}&comp_name=${pay_data.comp_name}&quantity=${pay_data.quantity}&ppu=${price}&total=${pay_data.quantity*price}`)
      // .catch(err => console.error(err))
  }
  createInvoice = _ => {
    const { pay_data } = this.state;
    fetch(`http://localhost:4000/CreateInvoice?quantity=${pay_data.quantity}`)
      .then(data => this.setState({ data }))
      .catch(err => console.error(err))
      this.addHistory()
    window.location.reload()
  }



  render() {
    const { data } = this.state.data;
    const { amount } = this.state.amount;
    let cur
    if (amount != null) {
      cur = amount[amount.length - 1].quantity;
    }
    const { pay_data } = this.state;

    return (
      <div className='Title-text'>
        Create Invoice
        <div className='Form_cont'>
          <div className='Form'>
            <div className='Input'>
              Company Name:
        <Input placeholder="" onChange={e => this.setState({ pay_data: { ...pay_data, comp_name: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Amount:
        <Input placeholder="" onChange={e => this.setState({ pay_data: { ...pay_data, quantity: e.target.value } })}
              />
              (Current Available: {cur})
            </div>
            <Button type="primary" onClick={this.createInvoice} style={{ width: '15%' }}>Create Invoice</Button>
          </div>
        </div>
        Current Customer
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default CreateInvoice;
