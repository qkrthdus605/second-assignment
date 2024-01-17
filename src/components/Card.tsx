import styled from "styled-components";

const Card = () => {
  return (
    <CardDiv>
      <ImgBox />
      <ContentBox>
        <FirstRow>
          <Text>A 데코타일</Text>
          <EventTag>이벤트</EventTag>
        </FirstRow>
        <SecondRow>
          <Text>- 1 +</Text>
          <Text>100,000원 </Text>
        </SecondRow>
      </ContentBox>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  width: 300px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default Card;
