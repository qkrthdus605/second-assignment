import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderLogo
        src={process.env.PUBLIC_URL + "/assets/small-logo.svg"}
        alt="header logo"
      />
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  width: 350px;
  height: 57px;
  position: fixed;
  top: 0;
  background-color: black;
  box-shadow: 0 4px 4px #b5b5b5;
`;

const HeaderLogo = styled.img`
  margin: 13px 0 0 12px;
`;

export default Header;
