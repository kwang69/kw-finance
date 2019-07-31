import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Employee',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
  },
  {
    title: 'Federal Tax',
    dataIndex: 'ftax',
    key: 'ftax',
  },
  {
    title: 'Sate Tax',
    dataIndex: 'stax',
    key: 'stax',
  },
  {
    title: 'Social Security Tax',
    dataIndex: 'sstax',
    key: 'sstax',
  },
  {
    title: 'Medicare Tax',
    dataIndex: 'mtax',
    key: 'mtax',
  },
  {
    title: 'Amount paid',
    dataIndex: 'paid',
    key: 'paid',
  },
];

class ViewPaymentRoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewPayRoll')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state.data;
    return (
      <div className='Title-text'>
        View Payment Roll
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default ViewPaymentRoll;
