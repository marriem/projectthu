import contact from './component/contact';
import { Memberscount,Countdown ,Contact , Location } from './component/index';
import {Team} from './screens/index';
function App() {
  return (
    <div>
     <Countdown/>
     <Memberscount/>
     <Contact/>
     <Location/>

     </div>
  );
}

export default App;
