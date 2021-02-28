import './App.css';
import SocialWindow from './components/SosialWindow/Window/Window';
import ResumeWindow from './components/ResumeWindow/Window/Window';

import { BrowserRouter, Route } from "react-router-dom";
import TestTOTWindow from './components/TestProjectTOT/Window/Window';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app_container'>
        <Route path='/resume' render={() => <ResumeWindow />}/>
        <Route path='/social' render={() => <SocialWindow />}/>
        <Route path='/testTOT' render={() => <TestTOTWindow />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
