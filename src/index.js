import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/CSS/Regular.css'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Howto from './components/Howto';
import Downloads from './components/Downloads';
import InfoDump from './components/Infodump';
const App = () => {
  const [mode, setMode] = useState('human');

  const handleClick = () => {
    setMode(mode === 'human' ? 'alien' : 'human');
  };
  return (
    <React.StrictMode>
      <Header mode={mode} />
      <About mode={mode} handleClick={handleClick}/>
      <Howto mode={mode} />
      <Downloads mode={mode}  />
      <InfoDump  mode={mode} />
      <Footer mode={mode}/>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();