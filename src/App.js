import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ListadoPruebas from './components/ListadoPruebas';
import NuevaPrueba from './components/NuevaPrueba';

function App() {
  return (

    <Router>
    <Switch>
      <Route exact path="/" component={NuevaPrueba} /> 
      <Route exact path="/listado-pruebas" component={ListadoPruebas} />           
    </Switch>
  </Router>

  );
}

export default App;
