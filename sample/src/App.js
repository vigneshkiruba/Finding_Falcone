import React, { Component } from "react";
import axios from "axios";
import Findfalcone from "./components/FindFalcone";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      vehicles: [],
      isPlanetsLoaded: false,
      isVehiclesLoaded: false,
      token: "",
    };
  }
  callPlanetAPI = (planetAPI) => {
    planetAPI
      .then((result) => result.data)
      .then((json) => {
        this.setState({
          isPlanetsLoaded: true,
          planets: json,
        });
      });
  };

  callVehicleAPI = (vehicleAPI) => {
    vehicleAPI
      .then((result) => result.data)
      .then((json) => {
        this.setState({
          isVehiclesLoaded: true,
          vehicles: json,
        });
      });
  };

  getToken = () => {
    fetch("https://findfalcone.herokuapp.com/token", {
      method: "POST",
      headers: { Accept: "application/json" },
    })
      .then((data) => data.json())
      .then((response) => this.setState({ token: response }))
      .then((error) => console.log(error));
  };

  async componentDidMount() {
    const planetAPI = axios.get("https://findfalcone.herokuapp.com/planets");
    const vehicleAPI = axios.get("https://findfalcone.herokuapp.com/vehicles");
    await this.callPlanetAPI(planetAPI);
    await this.callVehicleAPI(vehicleAPI);
    await this.getToken();
  }

  render() {
    var {
      isPlanetsLoaded,
      isVehiclesLoaded,
      planets,
      vehicles,
      token,
    } = this.state;
    return (
      <div className="App">
        <Findfalcone
          isPlanetsLoaded={isPlanetsLoaded}
          isVehiclesLoaded={isVehiclesLoaded}
          token={token.token}
          AllPlanets={planets}
          AllVehicles={vehicles}
        />

        <footer></footer>
      </div>
    );
  }
}

export default App;
