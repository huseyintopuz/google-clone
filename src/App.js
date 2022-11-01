import Header from './components/Header';
import Logo from './components/Logo';
import SearchMotor from './components/SearchMotor';
import Buttons from './components/Buttons';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <SearchMotor />
      <Buttons />
      <div className='space' />
      <Footer />
    </div>
  );
}

export default App;
