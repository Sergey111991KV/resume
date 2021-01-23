import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contents from './components/Contents/Contents';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='social_network'>
      <Header></Header>
      <Navbar></Navbar>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
}

export default App;
