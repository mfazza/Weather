import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"
import 'bootstrap/dist/css/bootstrap.min.css'

const API_KEY = "cf0fa652354f67ca276fa962a0572292";

//in react 16 the constructor has been deprecated
class App extends React.Component {

  //there's a state, so this needs to be a class-based component
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    //prevent default is necessary or else pressing the button will refresh the page
    e.preventDefault();

    //we access the names we defined in the form component
    const city = e.target.city.value;
    const country = e.target.elements.country.value;

    console.log(city + " " + country);


    const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + API_KEY + "&units=imperial");
    console.log(api_call);

    const data = await api_call.json();
    console.log(data);

    //only renders it if the values is true
    if (city && country) {
      console.log("City and country exist");

      this.setState({
        temperature: data.main.temp + "°F",
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });




    } else {
      console.log("City and country do not exist");

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a city and a country"
      });
    }
  }

  //constructor(){
  //we can also use an arrow function that binds to App
  //this.getWeather = this.getWeather.bind(this);
  //}


  //About JSX: you can only return one parent element per render
  //getWeather is a prop.  When we add it to Form, we allow Form.js to use it.
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};



export default App;