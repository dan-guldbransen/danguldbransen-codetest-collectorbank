import Header from './components/Header';
import YearSlider from './components/MuiSlider/yearslider';
import AmountSlider from './components/MuiSlider/amountslider';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: block;
  margin: auto;
  padding: 32px;
  height: 100%;
  max-width: 800px;
  background-color: #fff;
}`;

const SubHeader = styled.h2`
  font-size: 18px;
  color: #717171;
  margin-top: 32px;
}`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 32px;
}`;

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SubHeader>Lånebelopp</SubHeader>
      <AmountSlider />
      <SubHeader>Återbetalningstid</SubHeader>
      <YearSlider />
      <ButtonWrapper>
        <Button>Till ansökan</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Home;
