import styled from "styled-components";

type BgDivProps = {
  bgColor?: string;
  children?: React.ReactNode;
};

const BgDiv = ({ bgColor = "white", children }: BgDivProps) => {
  return <Div bgColor={bgColor}>{children}</Div>;
};

const Div = styled.div<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor};
  width: 350px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default BgDiv;
