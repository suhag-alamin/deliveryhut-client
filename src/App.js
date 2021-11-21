import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import AddService from "./components/Pages/AddService/AddService";
import AllServices from "./components/Pages/AllServices/AllServices";
import Contact from "./components/Pages/Contact/Contact";
import BlogDetails from "./components/Pages/Home/Blogs/BlogDetails/BlogDetails";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import ManageAllOrders from "./components/Pages/ManageAllOrders/ManageAllOrders";
import UpdateStatus from "./components/Pages/ManageAllOrders/UpdateStatus/UpdateStatus";
import MyOrders from "./components/Pages/MyOrders/MyOrders";
import OrderPlace from "./components/Pages/OrderPlace/OrderPlace";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import useDocumentTitle from "./hooks/useDocumentTitle";

function App() {
  useDocumentTitle("Deliveryhut - Professional delivery services", false);

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/services" element={<AllServices />} />

            <Route
              path="/myOrders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />

            <Route
              path="/orderPlace/:id"
              element={
                <PrivateRoute>
                  <OrderPlace />
                </PrivateRoute>
              }
            />

            <Route
              path="/manageAllOrders"
              element={
                <PrivateRoute>
                  <ManageAllOrders />
                </PrivateRoute>
              }
            />

            <Route
              path="/manageAllOrders/:id"
              element={
                <PrivateRoute>
                  <UpdateStatus />
                </PrivateRoute>
              }
            />

            <Route
              path="/addService"
              element={
                <PrivateRoute>
                  <AddService />
                </PrivateRoute>
              }
            />

            <Route
              path="/blog/:id"
              element={
                <PrivateRoute>
                  <BlogDetails />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
