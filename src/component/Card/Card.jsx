import styled from 'styled-components';
import { Button } from '../button/index';
import ethIcon from '../../img/ethIcon.png'
// import Plus from "../../img/plus.png"

const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
  margin: 15px;
  margin-top: 10px;
  /* Text/color2 */

  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;
    font-weight: bold;
    /* Text/color1 */

    color: #27262E;
  }
  .content {
    font-size: 24px;
    line-height: 31px;
    font-weight: bold;
    /* Text/color1 */

    color: #27262E;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
  }
  .eth {
    margin-right: 4px;
  }

`
export const Card = ({ title, amount, content, percent }) => {
  return <StyledCard>
    <div className='title'>{title}</div>
    {amount ?
      <div className='ammount-wrapper'>
        <img className='eth' src={ethIcon} alt="eth-icon"></img>
        <span className='amount'>{amount}</span> ETH
      </div> :
      <div className='ammount-wrapper'>
        {/* <img className='eth' src={Plus}></img> */}
        <span className='content'>+{content}</span> %
      </div>
    }
    <Button percent={percent} boderColor="#E9E9E9">{percent}</Button>
  </StyledCard>
}