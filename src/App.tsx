import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Order from "./components/Order";
import Complete from "./components/Complete";
import Error from "./components/Error";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
