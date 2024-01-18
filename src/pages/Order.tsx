// import styled from "styled-components";
import BgDiv from "../components/BgDiv";
import Header from "../components/Header";
import OrderTab from "../components/OrderTab";
import ProductList from "../components/ProductList";

const Order = () => {
  return (
    <BgDiv>
      <Header />
      <ProductList />
      <OrderTab />
    </BgDiv>
  );
};

export default Order;
