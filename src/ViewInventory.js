import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
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
    title: 'Product',
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
];

class ViewInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

  }


  componentDidMount() {
    fetch('http://localhost:4000/ViewInventory')
      .then(response => response.json())
      .then(data => this.setState({ data }));


  }
  render() {

    let { data } = this.state.data;
    let min = 999999
    let j = 0;
    let data_1;
    let amount;
    let price
    if (data != null) {
      for (j = 0; j < data.length - 1; j++) {
        if (data[j].quantity < min) {
          min = data[j].quantity;
        }
      }
      data_1 = data.slice(data.length -1, data.length)
      data = data.slice(0, data.length - 1)
      amount = data_1[0].quantity;
      price = data_1[0].ppu
      data_1[0].value =data_1[0].quantity * data_1[0].ppu;

      for(j = 0; j < data.length;j++){
        data[j].value = data[j].quantity * data[j].ppu;
        if(data[j].quantity < 1000){
          data[j].reorder = 'YES'
        }
      }
    }

    return (
      <div className='Title-text'>
        View Inventory
         <Table columns={columns} dataSource={data} />
         <Table columns={columns_1} dataSource={data_1} />
        <div className="min_txt">Amount of Products can be made:{min}</div>
        <div className="min_txt">Amount of Products in Stock:{amount} | Value of Products in Stock:${amount*price}</div>

      </div>
    );
  }
}
export default ViewInventory;
