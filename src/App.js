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
import useDocumentTitle from "./hooks/useDocumentTitle";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import BlogDetails from "./components/Pages/Home/Blogs/BlogDetails/BlogDetails";

function App() {
  useDocumentTitle("Deliveryhut - Professional delivery services", false);

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
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/services">
              <AllServices></AllServices>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/orderPlace">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/blog/:id">
              <BlogDetails></BlogDetails>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
