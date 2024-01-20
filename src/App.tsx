import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Order from "./pages/Order";
import Complete from "./pages/Complete";
import Error from "./pages/Error";
import GlobalStyle from "./style/GlobalStyle";
import { OrderContextProvider } from "./context/OrderContext";

const App: React.FC = () => {
  return (
    <OrderContextProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </OrderContextProvider>
  );
};

export default App;
