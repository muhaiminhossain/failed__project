import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Icons from './Components/icons/Icons';
import Portfolio from './Components/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
    <Header/>
    <Icons/>
    <Portfolio/>
    <Footer></Footer>
    </div>
  );
}

export default App;
