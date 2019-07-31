import React, { Component } from 'react';
import './App.css';
import ViewEmployee from './ViewEmployee'
import AddEmployee from './AddEmployee'
import ViewCustomer from './ViewCustomer'
import AddCustomer from './AddCustomer'
import ViewVendor from './ViewVendor'
import AddVendor from './AddVendor'
import PayEmployee from './PayEmployee'
import ViewPaymentRoll from './ViewPaymentRoll'
import ViewInventory from './ViewInventory'
import CreateInvoice from './CreateInvoice'
import ViewInvoiceHistory from './ViewInvoiceHistory'
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
          <Route path='/PayEmployee' component={PayEmployee} />
          <Route path='/ViewPaymentRoll' component={ViewPaymentRoll}/>
          <Route path='/ViewInventory' component={ViewInventory}/>
          <Route path='/CreateInvoice' component={CreateInvoice}/>
          <Route path='/ViewInvoiceHistory' component={ViewInvoiceHistory}/>
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
