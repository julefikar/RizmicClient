import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { UserContextProvider } from "./UserContext";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import { StatusContextProvider } from "./StatusContext";
import Status from "./components/Status";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import Wardrobe from "./pages/Wardrobe";
import PrivateRoute from "./components/PrivateRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GenerateFit from "./pages/fitGenerator/GenerateFit";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <UserContextProvider>
          <StatusContextProvider>
            <Navbar />
            <Status />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route
                path="/passwordreset:token:id"
                element={<PasswordReset />}
              />
              <Route
                path="/wardrobe"
                element={
                  <PrivateRoute>
                    <Wardrobe />
                  </PrivateRoute>
                }
              />
              <Route
                path="/generatefit"
                element={
                  <PrivateRoute>
                    <GenerateFit />
                  </PrivateRoute>
                }
              />
            </Routes>
          </StatusContextProvider>
        </UserContextProvider>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
