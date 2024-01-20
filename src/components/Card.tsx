import styled from "styled-components";
import { useState } from "react";
import { useOrderContext } from "../context/OrderContext";

interface CardProps {
  data: {
    id: string;
    name: string;
    event: number;
    meterialType: number;
    price: number;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { setTotalCnt, setTotalPrice } = useOrderContext();
  const [meterialCnt, setMeterialCnt] = useState<number>(0);

  // 감소
  const handleDec = () => {
    setMeterialCnt((prevValue) => Math.max(prevValue - 1, 0));
    setTotalCnt((prevTotalCnt) => Math.max(prevTotalCnt - 1, 0));
    setTotalPrice((prevTotalPrice) => Math.max(prevTotalPrice - data.price, 0));
  };

  // 증가
  const handleInc = () => {
    setMeterialCnt((prevValue) => Math.min(prevValue + 1, 999));
    setTotalCnt((prevTotalCnt) => prevTotalCnt + 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + data.price);
  };

  return (
    <CardDiv
      backgroundColor={meterialCnt > 0 ? "rgba(247, 90, 47, 0.1)" : "white"}
    >
      <ImgBox />
      <ContentBox>
        <FirstRow>
          <Text>{data.name}</Text>
          {data.event === 1 && <EventTag>이벤트</EventTag>}
        </FirstRow>
        <SecondRow>
          <CountDiv>
            <CountBtn onClick={handleDec}>-</CountBtn>
            <Text>{meterialCnt}</Text>
            <CountBtn onClick={handleInc}>+</CountBtn>
          </CountDiv>
          <Text>{data.price}원</Text>
        </SecondRow>
      </ContentBox>
    </CardDiv>
  );
};

const CardDiv = styled.div<{ backgroundColor: string }>`
  width: 300px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
`;

const ImgBox = styled.div`
  width: 62px;
  height: 62px;
  background-color: #d9d9d9;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstRow = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SecondRow = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.p``;

const EventTag = styled.div`
  width: 53px;
  height: 23px;
  border: none;
  border-radius: 10px;
  background-color: #f75a2f;
  margin-left: 10px;
  line-height: 23px;
  text-align: center;
  font-size: 13px;
  color: white;
`;

const CountDiv = styled.div`
  width: 58px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CountBtn = styled.button`
  font-size: 18px;
  font-weight: 400;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export default Card;
