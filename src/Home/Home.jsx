import styled from 'styled-components';
import { Card } from "../component/Card"
import  PrimaryLayout  from "../Layout";
import CardMain from 'component/Card/cardMain';
import { CarTopCre } from '../component/Card';

const Div = styled.div`
  display: flex;
`

const Home=()=> {
    return (
      <PrimaryLayout>
      <AppWrapper>
          <Div>
            <CardMain></CardMain>
          <div className="App-header">
            <Card title={"Revenue"} amount="5.00" percent={12.3} />
            <Card title={"Spending"} amount="2.00" percent={8.1} />
            <Card title={"ROI"} content="14.02" percent={-5.1} />
            <Card title={"Estimated"} amount="7.00" percent={3.2} />
          <CarTopCre>

          </CarTopCre>
          </div>
          </Div>
        </AppWrapper>
        </PrimaryLayout>
    );
  }
  
  export default Home;
  const AppWrapper = styled.div`
  background: #CAEAE6;
  text-align: center;
  .button-content {
    display: inline-block;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262E;
  }
  .App-header {
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-wrap: wrap;
  width: 400px;
  padding-top: 60px;
}
  
  `