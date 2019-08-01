import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const columns = [
  {
    title: 'Assets',
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
    title: 'Liabilitys & Net Worth',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '$',
    dataIndex: 'value',
    key: 'value',
  },
];

class ViewBalanceSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

  }

  update = _ => {
    const { data } = this.state.data;
    let ar = data[1].value;
    fetch(`http://localhost:4000/update?ar=${ar}`)
    fetch(`http://localhost:4000/update_1`)
    let ap = data[9].value;
    fetch(`http://localhost:4000/update_2?ap=${ap}`)
    fetch(`http://localhost:4000/update_3`)
    window.location.reload()
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewBalanceSheet')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {

    let { data } = this.state.data;
    let j = 0;
    let data_1;
    if (data != null) {
      data[3].value = data[0].value + data[1].value + data[2].value
      data[8].value = data[3].value
      data[data.length - 1].value = data[8].value
      data[data.length - 2].value = data[8].value - data[data.length - 9].value
      data_1 = data.slice(data.length - 9, data.length)
      data = data.slice(0, data.length - 9)
    }

    return (

      <div className='Title-text'>
        View Balance Sheet
        <div className='Menu_1'>
          <Button type="primary" onClick={this.update} >Update to the Next Month(for test)</Button>
        </div>
        <Table columns={columns} dataSource={data} />
        <Table columns={columns_1} dataSource={data_1} />
      </div>
    );
  }
}

export default ViewBalanceSheet;
