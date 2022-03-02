import './App.css';
import Welcome from './pages/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PhoneConf from './pages/PhoneConf';
import CodeConfig from './pages/CodeConfig';
import AllowNotification from './pages/AllowNotification';
import Home from './pages/Home';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlanLayout>  
          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/phone' element={<PhoneConf/>}/>
            <Route path='/code' element={<CodeConfig/>}/>
            <Route path='/allow_notification' element={<AllowNotification/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
          </Routes>
        </PlanLayout>
      </BrowserRouter>
    </div>
  );
}
//ant-design,antd,DownOutLined,FireOutLined-@ant-design/icon
//

export default App;