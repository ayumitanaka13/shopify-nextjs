import styled from "styled-components";

import { Row, Col, Typography, Button } from "antd";

const { Title } = Typography;

const HeaderContainer = styled(Row)`
  margin: 30px 0px;
  background-color: #9dc3f8;
`;
const LeftColumn = styled(Col)`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;
const RightColumn = styled(Col)`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
`;
const SubTitleWrapper = styled(Row)`
  border-left: 3px solid black;
  margin-bottom: 20px;
  padding-left: 16px;
`;

const ShopNowBtn = styled(Button)`
  align-self: flex-start;
  color: black !important;
  border-color: black !important;
  margin-bottom: 10px;
`;

const PriceText = styled(Title)`
  margin-top: 0 !important;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftColumn sm={{ span: 24 }} md={{ span: 12 }}>
        <SubTitleWrapper>
          <Title level={5}>
            Sofas
            <br />
            2021
          </Title>
        </SubTitleWrapper>
        <Title>Mod Leather Sofa</Title>
        <PriceText level={4}>From $200</PriceText>
        <ShopNowBtn ghost>Shop Now</ShopNowBtn>
        <Title level={5}>
          Designed by <br />
          Ayumi
        </Title>
      </LeftColumn>
      <RightColumn sm={{ span: 24 }} md={{ span: 12 }}>
        <img
          src="https://raw.githubusercontent.com/prince1456/CICC-class/main/public/HomeBanner.png"
          alt=""
        />
      </RightColumn>
    </HeaderContainer>
  );
};

export default Header;
