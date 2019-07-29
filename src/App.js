import React, { Component } from 'react';
import './App.css';
import ViewEmployee from './ViewEmployee'
import AddEmployee from './AddEmployee'
import ViewCustomer from './ViewCustomer'
import AddCustomer from './AddCustomer'
import ViewVendor from './ViewVendor'
import AddVendor from './AddVendor'
import Home from './Home'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import Button from 'antd/es/button';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Button className="Home-btn">
          <Link to='/'>Home</Link>
          </Button>
          <div className="Home-titl">WK Finance</div>
          </header>
          <Route exact path='/' component={Home} />
          <Route path='/ViewEmployee' component={ViewEmployee} />
          <Route path='/AddEmployee' component={AddEmployee} />
          <Route path='/ViewCustomer' component={ViewCustomer} />
          <Route path='/AddCustomer' component={AddCustomer} />
          <Route path='/ViewVendor' component={ViewVendor} />
          <Route path='/AddVendor' component={AddVendor} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
