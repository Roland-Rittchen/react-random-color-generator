import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function Div(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        transition: 'all 1s ease',
        WebkitTransition: 'all 1s ease',
        MozTransition: 'all 1s ease',
      }}
    >
      Generated Color: {props.color}
    </div>
  );
}

function Control() {
  const [col, setCol] = useState('#dd0b9b');
  const [hue, setHue] = useState('red');
  const [lum, setLum] = useState('light');
  const param = {
    luminosity: lum,
    hue: hue,
  };
  return (
    <div>
      <form>
        <label>
          Hue:
          <input value={hue} onChange={(e) => setHue(e.target.value)} />
        </label>
        <br />
        <label>
          Luminosity:
          <input value={lum} onChange={(e) => setLum(e.target.value)} />
        </label>
      </form>
      <div>
        <button onClick={() => setCol(randomColor(param))}>Generate</button>
        <Div color={col} />
        {/* <span>
          {hue} and {lum}
        </span>  */}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Control />
      </header>
    </div>
  );
}

export default App;
