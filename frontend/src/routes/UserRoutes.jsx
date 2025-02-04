import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import {HomePage} from "../Pages/HomePage";
import { Signup } from "../Component/Auth/Signup";
import { Login } from "../Component/Auth/Login";
import { OTP } from "../Component/Auth/OTP";
import { UserProfile } from "../Pages/UserProfile";
import { QRScanner } from "../Component/Profile/QRScanner";
import { Amount } from "../Component/KeyPad/Amount";
import { Pin } from "../Component/KeyPad/Pin";

export default function CustomerRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/otp" element={<OTP/>}></Route>
        <Route
          path="/profile"
          element={
            // <PrivateRoutes>
              <UserProfile />
            // </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/scanner"
          element={
            // <PrivateRoute>
              <QRScanner />
            // </PrivateRoute>
          }
        ></Route>
        <Route
          path="/amount"
          element={
            // <PrivateRoute>
              // <KeyPad />
              <Amount/>
            // </PrivateRoute> }
          }
        ></Route>
        <Route
          path="/pin"
          element={
            // <PrivateRoute>
              <Pin />
            // </PrivateRoute>
          }
        ></Route>
        {/*
        <Route
          path="/order-history"
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          }
        ></Route>*/}
      </Routes>
    </div>
  );
}