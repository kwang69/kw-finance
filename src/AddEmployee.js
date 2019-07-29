import React, { Component } from 'react';
import Button from 'antd/es/button';
import './Global.css';
import { Form, Icon, Input, Checkbox, InputNumber } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        age: 0,
        address: "",
        snn: 0,
        now: 0,
        salary: 0,

      }
    };
  }

  addEmployee = _ => {
    const { data } = this.state;
    fetch(`http://localhost:4000/AddEmployee?name=${data.name}&age=${data.age}&address=${data.address}&snn=${data.snn}&now=${data.now}&salary=${data.salary}`)
      .catch(err => console.error(err))
  }

  render() {
    const { data } = this.state;
    return (
      <div className='Title-text'>
        Add Employee
        <div className='Form_cont'>
          <div className='Form'>
            <div className='Input'>
              Name:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, name: e.target.value } })}
              />
            </div>
            <div className='Input' >
              Age:
        <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, age: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Adress:
        <Input placeholder="" onChange={e => this.setState({ data: { ...data, address: e.target.value } })}
              />
            </div>
            <div className='Input'>
              SNN:
        <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, snn: e.target.value } })}
              />
            </div>
            <div className='Input'>
              <div>No of Withholdings:</div>
              <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, now: e.target.value } })}
              />
            </div>
            <div className='Input'>
              Salary($):
        <Input placeholder="" style={{ width: '20%' }} onChange={e => this.setState({ data: { ...data, salary: e.target.value } })}
              />
            </div>

            <Link to="/ViewEmployee">
              <Button type="primary" onClick={this.addEmployee}>Add Employee</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}



export default AddEmployee;
