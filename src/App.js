import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/Login/index';
import Register from './pages/Register/index/Index';
import ViewCourses from './pages/Home/ViewCourses/ViewCourses';
import BuyCourses from './pages/Home/BuyCourses/BuyCourses';


function App() {
  return (
    <Router>
      <div>
      
        {/* Cargando contenido dinamico de rutas */}
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Home">
            <ViewCourses />
          </Route>
          <Route exact path="/buyCourse">
            <BuyCourses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
