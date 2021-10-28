import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import AllServices from "./components/Pages/AllServices/AllServices";
import MyOrders from "./components/Pages/MyOrders/MyOrders";
import OrderPlace from "./components/Pages/OrderPlace/OrderPlace";
import ManageAllOrders from "./components/Pages/ManageAllOrders/ManageAllOrders";
import AddService from "./components/Pages/AddService/AddService";
import Login from "./components/Pages/Login/Login";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/services">
            <AllServices></AllServices>
          </Route>
          <Route exact path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/orderPlace">
            <OrderPlace></OrderPlace>
          </Route>
          <Route exact path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
