import './App.css';
import styled from 'styled-components';
import { Card } from "../src/component/Card"
const AppWrapper = styled.div`
  background: #CAEAE6;
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262E;
  }`
function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <Card title={"Revenue"} amount="5.00" percent={12.3}/>
        <Card title={"Spending"} amount="2.00" percent={8.1}/>
        <Card title={"ROI"} content="14.02" percent={-5.1}/>
        <Card title={"Estimated"} amount="7.00" percent={3.2}/>
      </header>
    </AppWrapper>
  );
}

export default App;
