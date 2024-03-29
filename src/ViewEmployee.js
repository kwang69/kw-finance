import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'SNN',
    dataIndex: 'snn',
    key: 'snn',
  },
  {
    title: 'No of Withholdings',
    dataIndex: 'now',
    key: 'now',
  },
  {
    title: 'Salary($)',
    dataIndex: 'salary',
    key: 'salary',
  },
];

class ViewEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewEmployee')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state.data;
    return (
      <div className='Title-text'>
        View Employees
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default ViewEmployee;
