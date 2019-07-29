import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
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

class ViewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewCustomer')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state.data;
    return (
      <div className='Title-text'>
        View Customers
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default ViewCustomer;
