import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Sales',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '$',
    dataIndex: 'value',
    key: 'value',
  },
];

const columns_1 = [
  {
    title: 'Expenses',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '$',
    dataIndex: 'value',
    key: 'value',
  },
];

const columns_2 = [
  {
    title: 'Income',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '$',
    dataIndex: 'value',
    key: 'value',
  },
];

class ViewIncomeStatement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewIP')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {

    let { data } = this.state.data;
    let j = 0;
    let data_1;
    let data_2;
    if (data != null) {
      data[2].value = data[0].value - data[1].value
      data[4].value = Math.ceil(data[3].value * 0.26)
      data[7].value = data[3].value + data[5].value + data[6].value
      data[9].value = data[2].value - data[7].value
      data[10].value = Math.ceil(data[9].value * 0.26)
      data[11].value = data[9].value - data[10].value
      data_1 = data.slice(3, data.length - 4)
      data_2 = data.slice(data.length - 4, data.length)
      data = data.slice(0, 3)
    }

    return (

      <div className='Title-text'>
        View Income Statement
        <Table columns={columns} dataSource={data} />
        <Table columns={columns_1} dataSource={data_1} />
        <Table columns={columns_2} dataSource={data_2} />
      </div>
    );
  }
}

export default ViewIncomeStatement;
