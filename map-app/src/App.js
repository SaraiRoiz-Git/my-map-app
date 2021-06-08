import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Maps from './pages/Maps';
import Lists from './pages/Lists';
import { checkUserValidity } from './utility';
class App extends React.Component {

  constructor(props) {
    super(props);

    let usersData = [];
    if (localStorage.localUsers) {
      usersData = JSON.parse(localStorage.localUsers);
    }

    let mapsData = [];
    if (localStorage.localMaps) {
      mapsData = JSON.parse(localStorage.localMaps);
    }

    let placesData = [];
    if (localStorage.localPlaces) {
      placesData = JSON.parse(localStorage.localPlaces);
    }

    let activeUser = [];
    if (localStorage.localUser) {
      activeUser = JSON.parse(localStorage.localUser);
    }

    this.state = {
      user: activeUser,
      userslist: usersData,
      maps: mapsData,
      places: placesData
    }

  }
  // log out from app
  logout = () => {
    const localUser = JSON.stringify(null);
    localStorage.localUser = localUser
    this.setState({
      user: null
    })
    
  }
  // update the user on the app
  login = (user) => {
    const localUser = JSON.stringify(user);
    localStorage.localUser = localUser
    this.setState({
      user: user

    })
  }
  // add new user for list of users
  addUser = (user) => {
    const localUsersString = JSON.stringify(this.state.userslist.concat(user));

    localStorage.localUsers = localUsersString

    this.setState({
      user: user,
      userslist: this.state.userslist.concat(user)
    })
  }

  // add new map to map list
  addMap = (map) => {
    const localMapsString = JSON.stringify(this.state.maps.concat(map));

    localStorage.localMaps = localMapsString;
    this.setState({
      maps: this.state.maps.concat(map)
    })
  }

  addPlace = (place) => {
    const localPlacesString = JSON.stringify(this.state.places.concat(place));
    localStorage.localPlaces = localPlacesString;
    this.setState({
      places: this.state.places.concat(place)
    })
  }

  placeMark = (currPlace, className) => {
    const index = this.state.places.findIndex((place) => place.id === currPlace.id);
    let places = [...this.state.places]
    places[index].className = className;
    this.setState({ places: places });
  }

  render() {
    console.log("______________",this.state.places)
    const maps = (this.state.maps && this.state.user) ? this.state.maps.filter(map => map.email === this.state.user.email) : [{}]
    const pins = (this.state.places && this.state.user) ? this.state.places.filter(pin => pin.email === this.state.user.email) : [{}]
    checkUserValidity(this.state.user)
    return (
      <HashRouter>
        <Route exact path={['/home', '/maps', '/list/:id', '/edit-list/:id']}>
          <AppNavbar exact
            user={this.state.user}
            logout={this.logout} />
        </Route>

        <Route exact path={'/home'}>
          <HomePage
            user={this.state.user}
            addMap={this.addMap}
            list={maps}
          ></HomePage>
        </Route>

        <Route exact path={'/login'}>
          <Login
            userslist={this.state.userslist}
            login={this.login}></Login>
        </Route>

        <Route exact path={'/'}>
          <Signup
            addUser={this.addUser}
            users={this.state.userslist}>

          </Signup>
        </Route>

        <Route exact path={'/maps'}>
          <Maps
            user={this.state.user}
            list={maps}>
          </Maps>
        </Route>

        <Route exact path={'/list/:id'}>
          <Lists
            user={this.state.user}
            list={pins}
            addPlace={this.addPlace}
            placeMark={this.placeMark}>

          </Lists>
        </Route>

      </HashRouter>

    );
  }
}

export default App;