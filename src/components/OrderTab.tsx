import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useOrderContext } from "../context/OrderContext";

const OrderTab = () => {
  const navigate = useNavigate();
  const { totalCnt, totalPrice, resetOrder } = useOrderContext();
  // 상품 리스트 로딩중 여부
  const { isLoading: productListLoading } = useQuery("product");

  const onClickOrder = () => {
    try {
      if (totalCnt === 0) {
        throw new Error("주문 수량이 0입니다");
      }
      // 주문 완료 후 초기화
      resetOrder();
      navigate("/complete");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <OrderDiv>
      <OrderContent>
        <Total>총 수량 : {totalCnt}개</Total>
        <Total>총 금액 : {totalPrice}원</Total>
      </OrderContent>
      <OrderBtn onClick={onClickOrder} disabled={productListLoading}>
        주문하기
      </OrderBtn>
    </OrderDiv>
  );
};

const OrderDiv = styled.div`
  width: 350px;
  height: 170px;
  position: fixed;
  bottom: 0;
  padding: 28px 22px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: none;
  border-radius: 20px 20px 0 0;
  background-color: white;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
`;

const OrderBtn = styled.button<{ disabled?: boolean }>`
  width: 300px;
  height: 48px;
  background-color: ${(props) =>
    props.disabled ? "rgba(193, 193, 193, 1)" : "black"};
  border: none;

  text-align: center;
  color: ${(props) => (props.disabled ? "black" : "white")};
  font-size: 18px;
  font-weight: 400;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: end;
  padding: 0 5px;
`;

const Total = styled.div`
  width: 166px;
  height: 26px;
`;

export default OrderTab;
