import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeaderText = styled.h1`
  font-size: 30px;
  margin-top: 32px;
  font-weight: 700;
`;

const CostContainer = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

const CostBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
  width: 300px;
  border-radius: 5px;
  background-color: #6b1fae;
  z-index: 0;
`;

const CostText = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.l};
  margin-bottom: 8px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

const CostCalculated = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

const CostArrow = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50px;
  height: 0;
  z-index: -1;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid ${(props) => props.theme.colors.purple};
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>Lånekalkyl</HeaderText>
      <CostContainer>
        <CostBox>
          <CostText>Exempel på månadskostnad</CostText>
          <CostCalculated>10 000 SEK / mån</CostCalculated>
          <CostArrow />
        </CostBox>
      </CostContainer>
    </HeaderContainer>
  );
};
export default Header;
