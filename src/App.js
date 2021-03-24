// import { Memberscount,Countdown } from './component/index';
import GAListener from './component/GAListener';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PageSpinner from './component/spinnerpage';


const Home = React.lazy(() => import('./screens/home'));
const Attend = React.lazy(() => import('./screens/attend'));
const Watch = React.lazy(() => import('./screens/watch'));
const Event1 = React.lazy(() => import('./screens/event1'));
const Event2 = React.lazy(() => import('./screens/event2'));
const Event3 = React.lazy(() => import('./screens/event3'));
const Team = React.lazy(() => import('./screens/team'));
const Sponsers = React.lazy(() => import('./screens/sponsers'));
const Contactus = React.lazy(() => import('./screens/contactus'));


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};


class App extends React.Component {
  render() {
  return (
    <BrowserRouter basename={getBasename()}>
    <GAListener>
      <Switch>
      <React.Suspense fallback={<PageSpinner />}>
            <Route exact path="/home" component={Home} />
            <Route exact path="/attend" component={Attend} />
            <Route exact path="/watch" component={Watch} />
            <Route exact path="/event1" component={Event1} />
            <Route exact path="/event2" component={Event2} />
            <Route exact path="/even3" component={Event3} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/sponsers" component={Sponsers} />
            <Route exact path="/contactus" component={Contactus} />
            {/* <Route
              exact
              path="/button-groups"
              component={ButtonGroupPage}
            />
            <Route exact path="/dropdowns" component={DropdownPage} />
            <Route exact path="/progress" component={ProgressPage} />
            <Route exact path="/modals" component={ModalPage} />
            <Route exact path="/forms" component={FormPage} />
            <Route exact path="/input-groups" component={InputGroupPage} />
            <Route exact path="/charts" component={ChartPage} /> */}

        <Redirect to="/main" />
        </React.Suspense>
      </Switch>
    </GAListener>
  </BrowserRouter>
);
          }
        }
        const query = ({ width }) => {
          if (width < 575) {
            return { breakpoint: 'xs' };
          }
        
          if (576 < width && width < 767) {
            return { breakpoint: 'sm' };
          }
        
          if (768 < width && width < 991) {
            return { breakpoint: 'md' };
          }
        
          if (992 < width && width < 1199) {
            return { breakpoint: 'lg' };
          }
        
          if (width > 1200) {
            return { breakpoint: 'xl' };
          }
        
          return { breakpoint: 'xs' };
        };

export default componentQueries(query)(App);
