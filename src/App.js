import React, { Component } from 'react';
import './App.css';
import ViewEmployee from './ViewEmployee'
import AddEmployee from './AddEmployee'
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
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
