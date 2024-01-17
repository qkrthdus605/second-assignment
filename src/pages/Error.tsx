import styled from "styled-components";
import BgDiv from "../components/BgDiv";
import useRedirect from "../hooks/useRedirect";

const Error = () => {
  useRedirect("/order", 3000);

  return (
    <BgDiv>
      <ErrorDiv>
        <p>주문에 실패하였습니다.</p>
        <p>다시 시도해주세요.</p>
      </ErrorDiv>
    </BgDiv>
  );
};

const ErrorDiv = styled.div`
  width: 200px;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export default Error;
