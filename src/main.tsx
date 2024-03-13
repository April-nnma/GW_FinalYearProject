import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, Login, Home } from "pages";
import {} from "pages/Home.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes> */}
    <ToastContainer />
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
