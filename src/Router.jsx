import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Reasults from './pages/Reaults/Reasults';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51QOGQdDVRE2LVDveZM5ME9iqJTSnyzePPc1htIPhnB3Lj9pWInuPcXdviUA47aweirzSDSqTR8BaWLW2n6eC1Kdx00denBaSsY"
);

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must login to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must login to access your Orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Reasults />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;