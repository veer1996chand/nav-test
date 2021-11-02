import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import Header from './component/Header'
import './App.css';
import SecondHeader from './component/Second_Header/index'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
  
  return (
    <div  >
     <Header /> 
     <Switch>
        <Route path="/ipad" render={props =><SecondHeader {...props}   navTo='ipad'/>} />
        <Route path="/mac" render={props =><SecondHeader {...props}   navTo='mac' />}  />
        <Route path="/" render={props =><SecondHeader {...props}   navTo='store' />}  />
      </Switch>
      </div>
  );
}

export default App;
