import './App.css';
import Footer from './Components/Footer/Footer';
import Icons from './Components/icons/Icons';
import Navi from './Components/Navigation/Navi';
import Portfolio from './Components/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
    <Navi></Navi>
    <Icons></Icons>
    <Portfolio></Portfolio>
    <Footer></Footer>
    </div>
  );
}

export default App;
