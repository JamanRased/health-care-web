import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login ></Login>
            </Route>
            <Route exact path="/logout">
              <Logout></Logout>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
