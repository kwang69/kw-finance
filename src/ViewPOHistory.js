import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Invoice No.',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Customer',
    dataIndex: 'comp_name',
    key: 'comp_name',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price/Unit',
    dataIndex: 'ppu',
    key: 'ppu',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  }
];

class ViewPOHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      vendor: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewPOHistory')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    fetch('http://localhost:4000/ViewVendor_1')
      .then(response => response.json())
      .then(vendor => this.setState({ vendor }));
  }

  render() {
    const { data } = this.state.data;
    return (
      <div className='Title-text'>
        View PO History
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default ViewPOHistory;
