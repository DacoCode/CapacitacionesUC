import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/Login/index';
import Register from './pages/Register/index/Index'; 
import ViewCourses from './pages/Home/ViewCourses/ViewCourses';

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
      </Switch>
    </div>
    </Router>
  );
};

export default App;
