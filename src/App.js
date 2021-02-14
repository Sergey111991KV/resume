import './App.css';
import SocialWindow from './components/SosialWindow/Window/Window';
import ResumeWindow from './components/ResumeWindow/Window/Window';
import { BrowserRouter, Route } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className='app_container'>
        ooo
        <Route path='/resume' render={() => <ResumeWindow />}/>
        <Route path='/social' render={() => <SocialWindow />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
