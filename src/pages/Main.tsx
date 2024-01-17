import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BgDiv from "../components/BgDiv";

const Main = () => {
  const navigate = useNavigate();

  const onClickOrder = () => {
    navigate("/order");
  };

  return (
    <BgDiv bgColor="black">
      <img
        src={process.env.PUBLIC_URL + "/assets/logo-black.svg"}
        alt="logo-black"
      />
      <OrderBtn onClick={onClickOrder}>주문하러 가기</OrderBtn>
    </BgDiv>
  );
};

const OrderBtn = styled.button`
  width: 172px;
  height: 88px;
  margin-top: 40px;
  border: none;
  border-radius: 20px;
  background-color: white;
  font-size: 25px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

export default Main;
