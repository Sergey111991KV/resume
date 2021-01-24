import './App.css';
import SocialWindow from './components/SosialWindow/SosialWindow/SocialWindow';
import ResumeWindow from './components/ResumeWindow/ResumeWindow/ResumeWindow';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div >
        <Route path='/main' component={ResumeWindow} />
        <Route path='/social' component={SocialWindow}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
