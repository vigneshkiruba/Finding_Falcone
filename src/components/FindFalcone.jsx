import React, { Component } from "react";
import DropDown from "./Dropdown";
import RadioButton from "./Radiobutton";
import "./Dropdown.css";
import "./Radiobutton.css";
import "./FindFalcone.css";
import Loading from "./Loading";
import logo from "./GTlogo.jpg";
class Findfalcone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown1: [...this.props.AllPlanets],
      dropdown2: [],
      dropdown3: [],
      dropdown4: [],
      radioButton1: JSON.parse(JSON.stringify(this.props.AllVehicles)),
      radioButton2: [],
      radioButton3: [],
      radioButton4: [],
      ddEvent1: "",
      ddEvent2: "",
      ddEvent3: "",
      ddEvent4: "",
      flag1: 0,
      flag2: 0,
      flag3: 0,
      flag4: 0,
      rbEvent1: "",
      rbEvent2: "",
      rbEvent3: "",
      rbEvent4: "",
      distance1: 0,
      distance2: 0,
      distance3: 0,
      distance4: 0,
      speeddEvent1: 0,
      speed2: 0,
      speed3: 0,
      speed4: 0,
      time1: 0,
      time2: 0,
      time3: 0,
      time4: 0,
      timetaken: 0,
      responses: {},
      isRequestSent: false,
      message: "",
    };
    this.resetState = this.resetState.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.AllPlanets !== nextProps.AllPlanets) {
      this.setState({
        dropdown1: [...nextProps.AllPlanets],
        radioButton1: JSON.parse(JSON.stringify(nextProps.AllVehicles)),
      });
    }
  };
  resetState() {
    this.setState({
      dropdown1: [...this.props.AllPlanets],
      dropdown2: [],
      dropdown3: [],
      dropdown4: [],
      radioButton1: JSON.parse(JSON.stringify(this.props.AllVehicles)),
      radioButton2: [],
      radioButton3: [],
      radioButton4: [],
      ddEvent1: "",
      ddEvent2: "",
      ddEvent3: "",
      ddEvent4: "",
      flag1: 0,
      flag2: 0,
      flag3: 0,
      flag4: 0,
      rbEvent1: "",
      rbEvent2: "",
      rbEvent3: "",
      rbEvent4: "",
      distance1: 0,
      distance2: 0,
      distance3: 0,
      distance4: 0,
      speed1: 0,
      speed2: 0,
      speed3: 0,
      speed4: 0,
      time1: 0,
      time2: 0,
      time3: 0,
      time4: 0,
      timetaken: 0,
      responses: {},
      isRequestSent: false,
      message: "",
    });
  }
  handleClick1 = (event) => {
    this.state.radioButton1.map((i) => {
      if (i.name === event && this.state.rbEvent1 !== event) {
        i.total_no = i.total_no - 1;
      } else if (
        this.state.rbEvent1 === i.name &&
        this.state.rbEvent1 !== event
      ) {
        i.total_no = i.total_no + 1;
      }
    });
    const radioButton1 = this.state.radioButton1;
    let time1 = 0;
    this.props.AllVehicles.map((i) => {
      if (i.name === event) {
        time1 = this.state.distance1 / i.speed;
        this.setState({ time1: this.state.distance1 / i.speed });
      }
    });
    this.setState({
      radioButton1,
      radioButton2: JSON.parse(JSON.stringify(radioButton1)),
      radioButton3: [],
      radioButton4: [],
      timetaken: time1,
      rbEvent1: event,
      rbEvent2: "",
      rbEvent3: "",
      rbEvent4: "",
    });
  };
  handleClick2 = (event) => {
    this.state.radioButton2.map((i) => {
      if (i.name === event && this.state.rbEvent2 !== event) {
        i.total_no = i.total_no - 1;
      } else if (
        this.state.rbEvent2 === i.name &&
        this.state.rbEvent2 !== event
      ) {
        i.total_no = i.total_no + 1;
      }
    });
    const radioButton2 = this.state.radioButton2;
    let time2 = 0;
    this.props.AllVehicles.map((i) => {
      if (i.name === event) {
        time2 = this.state.distance2 / i.speed;
        this.setState({ time2: this.state.distance2 / i.speed });
      }
    });
    this.setState({
      radioButton2,
      radioButton3: JSON.parse(JSON.stringify(radioButton2)),
      radioButton4: [],
      rbEvent2: event,
      rbEvent3: "",
      rbEvent4: "",
      timetaken: this.state.time1 + time2,
    });
  };
  handleClick3 = (event) => {
    this.state.radioButton3.map((i) => {
      if (i.name === event && this.state.rbEvent3 !== event) {
        i.total_no = i.total_no - 1;
      } else if (
        this.state.rbEvent3 === i.name &&
        this.state.rbEvent3 !== event
      ) {
        i.total_no = i.total_no + 1;
      }
    });
    const radioButton3 = this.state.radioButton3;
    let time3 = 0;
    this.props.AllVehicles.map((i) => {
      if (i.name === event) {
        time3 = this.state.distance3 / i.speed;
        this.setState({ time3: this.state.distance3 / i.speed });
      }
    });
    this.setState({
      radioButton3,
      radioButton4: JSON.parse(JSON.stringify(radioButton3)),
      rbEvent3: event,
      rbEvent4: "",
      timetaken: this.state.time1 + this.state.time2 + time3,
    });
  };
  handleClick4 = (event) => {
    this.state.radioButton4.map((i) => {
      if (i.name === event && this.state.rbEvent4 !== event) {
        i.total_no = i.total_no - 1;
      } else if (
        this.state.rbEvent4 === i.name &&
        this.state.rbEvent4 !== event
      ) {
        i.total_no = i.total_no + 1;
      }
    });
    const radioButton4 = this.state.radioButton4;
    let time4 = 0;
    this.props.AllVehicles.map((i) => {
      if (i.name === event) {
        time4 = this.state.distance4 / i.speed;
        this.setState({ time4: this.state.distance4 / i.speed });
      }
    });
    this.setState({
      radioButton4,
      rbEvent4: event,
      timetaken: this.state.time1 + this.state.time2 + this.state.time3 + time4,
    });
  };
  handleChange1 = (event) => {
    this.state.ddEvent1 = event;
    const ddEvent1 = this.state.ddEvent1;
    this.setState({ ddEvent1 });
    this.props.AllPlanets.map((i) => {
      if (i.name === event) {
        this.setState({ distance1: i.distance, speed1: i.speed });
      }
    });
    this.setState({
      dropdown2: this.state.dropdown1.filter((val) => val.name !== event),
    });
    if (this.state.ddEvent1 !== "select" && this.state.ddEvent1 !== "") {
      this.state.flag1 = 1;
    } else {
      this.state.flag1 = 0;
    }
    const flag1 = this.state.flag1;
    this.handleChange2(event);
    this.handleChange3(event);
    this.handleChange4(event);
    this.setState({
      flag1,
      flag2: 0,
      flag3: 0,
      flag4: 0,
      radioButton1: JSON.parse(JSON.stringify(this.props.AllVehicles)),
      radioButton2: [],
      radioButton3: [],
      radioButton4: [],
      rbEvent1: "",
      rbEvent2: "",
      rbEvent3: "",
      rbEvent4: "",
      timetaken: 0,
    });
  };

  handleChange2 = (event) => {
    this.state.ddEvent2 = event;
    const ddEvent2 = this.state.ddEvent2;
    this.setState({ ddEvent2 });
    this.props.AllPlanets.map((i) => {
      if (i.name === event) {
        this.setState({ distance2: i.distance, speed2: i.speed });
      }
    });
    this.setState({
      dropdown3: this.state.dropdown2.filter((val) => val.name !== event),
    });
    if (this.state.ddEvent2 !== "select" && this.state.ddEvent2 !== "") {
      this.state.flag2 = 1;
    } else {
      this.state.flag2 = 0;
    }
    const flag2 = this.state.flag2;
    this.handleChange3(event);
    this.handleChange4(event);
    this.setState({
      flag2,
      flag3: 0,
      flag4: 0,
      radioButton2: JSON.parse(JSON.stringify(this.state.radioButton1)),
      radioButton3: [],
      radioButton4: [],
      rbEvent2: "",
      rbEvent3: "",
      rbEvent4: "",
      timetaken: this.state.time1,
    });
  };

  handleChange3 = (event) => {
    this.state.ddEvent3 = event;
    const ddEvent3 = this.state.ddEvent3;
    this.setState({ ddEvent3 });
    this.props.AllPlanets.map((i) => {
      if (i.name === event) {
        this.setState({ distance3: i.distance, speed3: i.speed });
      }
    });
    this.setState({
      dropdown4: this.state.dropdown3.filter((val) => val.name !== event),
    });
    if (this.state.ddEvent3 !== "select" && this.state.ddEvent3 !== "") {
      this.state.flag3 = 1;
    } else {
      this.state.flag3 = 0;
    }
    const flag3 = this.state.flag3;
    this.handleChange4(event);
    this.setState({
      flag3,
      flag4: 0,
      radioButton3: JSON.parse(JSON.stringify(this.state.radioButton2)),
      radioButton4: [],
      rbEvent3: "",
      rbEvent4: "",
      timetaken: this.state.time1 + this.state.time2,
    });
  };

  handleChange4 = (event) => {
    this.state.ddEvent4 = event;
    const ddEvent4 = this.state.ddEvent4;
    this.setState({ ddEvent4 });
    this.props.AllPlanets.map((i) => {
      if (i.name === event) {
        this.setState({ distance4: i.distance, speed4: i.speed });
      }
    });
    if (this.state.ddEvent4 !== "select" && this.state.ddEvent4 !== "") {
      this.state.flag4 = 1;
    } else {
      this.state.flag4 = 0;
    }
    const flag4 = this.state.flag4;
    this.setState({
      flag4,
      radioButton4: JSON.parse(JSON.stringify(this.state.radioButton3)),
      rbEvent4: "",
      timetaken: this.state.time1 + this.state.time2 + this.state.time3,
    });
  };
  find = (
    ddEvent1,
    ddEvent2,
    ddEvent3,
    ddEvent4,
    rbEvent1,
    rbEvent2,
    rbEvent3,
    rbEvent4
  ) => {
    let JSONObj = {
      token: this.props.token,
      planet_names: [ddEvent1, ddEvent2, ddEvent3, ddEvent4],
      vehicle_names: [rbEvent1, rbEvent2, rbEvent3, rbEvent4],
    };
    console.log(JSON.parse(JSON.stringify(JSONObj)));
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://findfalcone.herokuapp.com/find";
    fetch(proxyurl + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JSONObj),
    })
      .then((data) => data.json())
      .then((response) =>
        this.setState({ isRequestSent: true, responses: response })
      )
      .catch((error) => console.log(error));
    if (!this.state.isRequestSent) {
      this.setState({ message: "Loading ..." });
    }
  };
  handleChange = (event, method) => {
    switch (method) {
      case "handleChange1": {
        {
          this.handleChange1(event);
        }
        break;
      }
      case "handleChange2": {
        {
          this.handleChange2(event);
        }
        break;
      }
      case "handleChange3": {
        {
          this.handleChange3(event);
        }
        break;
      }
      case "handleChange4": {
        {
          this.handleChange4(event);
        }
        break;
      }
      case "handleClick1": {
        {
          this.handleClick1(event);
        }
        break;
      }
      case "handleClick2": {
        {
          this.handleClick2(event);
        }
        break;
      }
      case "handleClick3": {
        {
          this.handleClick3(event);
        }
        break;
      }
      case "handleClick4": {
        {
          this.handleClick4(event);
        }
        break;
      }
    }
  };
  render() {
    var { timetaken, responses, isRequestSent } = this.state;
    return (
      <div>
        <header className="header">
          <img src={logo} alt="logo" />
          <h2 className="a">Finding Falcone!</h2>
          <button className="btn b" type="button" onClick={this.resetState}>
            Reset
          </button>
          <a className="c" href="https://www.geektrust.in">
            {" "}
            | &nbsp; Geektrust home
          </a>
        </header>
        {this.props.isPlanetsLoaded && this.props.isVehiclesLoaded ? (
          <div>
            <div
              className={`
              RadioButton__flag
              ${
                responses.status
                  ? responses.status === "success"
                    ? "hidden"
                    : "hidden"
                  : responses.error
                  ? "hidden"
                  : ""
              }
                $row
              `}
            >
              <div>
                <h2 style={{ textAlign: "center" }}>
                  Select planets you want to search in :
                </h2>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div className={`Div${i} column`}>
                  <DropDown
                    key={`${i}D`}
                    AllPlanets={this.state[`dropdown${i}`]}
                    val={this.state[`ddEvent${i}`]}
                    handleChange={(e, method) =>
                      this.handleChange(e.target.value, `handleChange${i}`)
                    }
                  />
                  <RadioButton
                    key={`${i}R`}
                    RadioButtons={this.state[`radioButton${i}`]}
                    flag={this.state[`flag${i}`]}
                    temp={this.state[`rbEvent${i}`]}
                    distance={this.state[`distance${i}`]}
                    val={i}
                    handleClick={(e, method) =>
                      this.handleChange(e.target.value, `handleClick${i}`)
                    }
                  />
                </div>
              ))}
              <div className="eDiv column">
                <h2 className="h1">Time taken {timetaken}</h2>
              </div>
              <div className="fDiv">
                <button
                  className="btntype button"
                  type="button"
                  onClick={(
                    ddEvent1,
                    ddEvent2,
                    ddEvent3,
                    ddEvent4,
                    rbEvent1,
                    rbEvent2,
                    rbEvent3,
                    rbEvent4
                  ) =>
                    this.find(
                      this.state.ddEvent1,
                      this.state.ddEvent2,
                      this.state.ddEvent3,
                      this.state.ddEvent4,
                      this.state.rbEvent1,
                      this.state.rbEvent2,
                      this.state.rbEvent3,
                      this.state.rbEvent4
                    )
                  }
                >
                  Find Falcone!
                </button>{" "}
                {this.state.message ? (
                  <div style={{ float: "right" }}>
                    <Loading flag={2} color="#f39c12" />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div style={{ height: "100px" }}></div>
            </div>

            <div>
              {responses.status ? (
                responses.status === "success" ? (
                  <div>
                    <h2 className="h1">
                      Success! Congratulations on Finding Falcone.King Shan is
                      mighty pleased.
                      <h3>Time taken: {timetaken}</h3>
                      <h3>Planet found : {responses.planet_name}</h3>
                    </h2>
                    <div style={{ "text-align": "center" }}>
                      <button
                        type="button"
                        className="btntype button"
                        onClick={this.resetState}
                      >
                        Start Again
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1 className="h1">
                      Failure! Can't able to find Falcone.
                      <br />
                    </h1>
                    <div style={{ "text-align": "center" }}>
                      <button
                        type="button"
                        className="btntype button"
                        onClick={this.resetState}
                      >
                        Start Again
                      </button>
                    </div>
                  </div>
                )
              ) : responses.error ? (
                <div>
                  <h1 className="h1">
                    {responses.error}
                    <br />
                  </h1>
                  <div style={{ "text-align": "center" }}>
                    <button
                      type="button"
                      className="btntype button"
                      onClick={this.resetState}
                    >
                      Start Again
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "100px" }}>
            <Loading flag={1} color="#f39c12" />
          </div>
        )}
        <footer className="footer">
          Coding problem - www.geektrust.in/finding-falcone
        </footer>
      </div>
    );
  }
}

export default Findfalcone;
