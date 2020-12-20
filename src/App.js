import './App.css';
import React from 'react'; 
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

// Import Google Auth
import { auth } from './firebase/firebase.utils';


class App extends React.Component { 
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubcribeFromAuth = null;

  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(user =>  {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    ); 
  }
}

export default App;
