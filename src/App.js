import './App.css';
import SocialWindow from './components/SosialWindow/Window/Window';
import ResumeWindow from './components/ResumeWindow/Window/Window';
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div >
        <Route path='/main' render={() => <ResumeWindow />}/>
        <Route path='/social' render={() => <SocialWindow state={props.state.socialWindow} 
                                            />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
