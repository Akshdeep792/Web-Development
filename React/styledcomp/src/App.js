import { StyledButton } from './components/Button/Button.styles';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>



    </div>
  );
}

export default App;
