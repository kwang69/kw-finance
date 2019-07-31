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

class ViewInvoiceHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewInvoiceHistory')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state.data;
    return (
      <div className='Title-text'>
        View Invoice History
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default ViewInvoiceHistory;
