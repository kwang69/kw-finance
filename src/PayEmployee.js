import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Input,Table, Divider, Tag } from 'antd';
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

class PayEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pay_data:{
        name:"",
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/ViewEmployee')
      .then(response => response.json())
      .then(data => this.setState({ data }));

    
  }

  addPayRoll = _ => {
    const { pay_data } = this.state;
    const day = new Date();
    const date = day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
    const {data} = this.state.data;
    let salary = 0;
    let j = 0;
    for(j = 0; j < data.length; j++) {
      if (data[j].name == pay_data.name) {
        salary = data[j].salary;
      }
    } 

    fetch(`http://localhost:4000/AddPayRoll?name=${pay_data.name}&date=${date}&salary=${salary}`)
      .catch(err => console.error(err))
  }

  updateBalance = _ => {
    const { pay_data } = this.state;
    const {data} = this.state.data;
    let salary = 0;
    let j = 0;
    for(j = 0; j < data.length; j++) {
      if (data[j].name == pay_data.name) {
        salary = data[j].salary;
      }
    } 

    fetch(`http://localhost:4000/updateBalance?salary=${salary}`)
      .catch(err => console.error(err))
    fetch(`http://localhost:4000/updateIS?salary=${salary}`)
      .catch(err => console.error(err))
  }

  payEmployee = _ => {
    const { pay_data } = this.state;
    fetch(`http://localhost:4000/PayEmployee?name=${pay_data.name}`)
      .then(data => this.setState({ data }))
      .catch(err => console.error(err))
      this.addPayRoll()
      this.updateBalance()
    window.location.reload()
  }



  render() {
    const { data } = this.state.data;
    const { pay_data } = this.state.pay_data;
    return (
      <div className='Title-text'>
        Pay Employee
        <div className='Form_cont'>
          <div className='Form'>
            <div className='Input'>
              Name:
        <Input placeholder="" onChange={e => this.setState({ pay_data: { ...pay_data, name: e.target.value } })}
              />
            </div>
              <Button type="primary" onClick={this.payEmployee} style={{ width: '15%' }}>Pay Employee</Button>
          </div>
        </div>
        Current Employee
         <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default PayEmployee;
