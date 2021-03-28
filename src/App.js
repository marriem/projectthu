// import { Memberscount,Countdown } from './component/index';
import GAListener from './component/GAListener';
import React from 'react';
import { BrowserRouter, Redirect, HashRouter,Switch } from 'react-router-dom';
import PageSpinner from './component/spinnerpage';
import Team from './screens/team';



// const Home = React.lazy(() => import('./screens/home'));
// const Attend = React.lazy(() => import('./screens/attend'));
// const Watch = React.lazy(() => import('./screens/watch'));
// const Event1 = React.lazy(() => import('./screens/event1'));
// const Event2 = React.lazy(() => import('./screens/event2'));
// const Event3 = React.lazy(() => import('./screens/event3'));
// const Team = React.lazy(() => import('./screens/team'));
// const Sponsers = React.lazy(() => import('./screens/sponsers'));
// const Contactus = React.lazy(() => import('./screens/contactus'));


// const getBasename = () => {
//   return `/${process.env.PUBLIC_URL.split('/').pop()}`;
// };


class App extends React.Component {
  render() {
  return (
//     <BrowserRouter basename={getBasename()}>
//     <GAListener>
//       <Switch>
//       <React.Suspense fallback={<PageSpinner />}>
//             <HashRouter exact path="/home" component={Home} />
//             <HashRouter exact path="/attend" component={Attend} />
//             <HashRouter exact path="/watch" component={Watch} />
//             <HashRouter exact path="/event1" component={Event1} />
//             <HashRouter exact path="/event2" component={Event2} />
//             <HashRouter exact path="/even3" component={Event3} />
//             <HashRouter exact path="/team" component={Team} />
//             <HashRouter exact path="/sponsers" component={Sponsers} />
//             <HashRouter exact path="/contactus" component={Contactus} />

//         <Redirect to="/" />
//         </React.Suspense>
//       </Switch>
//     </GAListener>
// </BrowserRouter>

<Team/>

);
          }
        }
export default App;
