import logo from './logo.svg';
import './App.css';
import { Button, RedButton } from './component/button/index';
import { CallName } from './component/Text/CallName';
import { Counter ,Counter2} from './component/Counter/Counter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="input" placeholder='Nhập tên của bạn' type="text"></input><br />
        <CallName Name="Nguyên"></CallName>
        <Counter></Counter>
        <Counter2></Counter2>        
      </header>
    </div>
  );
}

export default App;
