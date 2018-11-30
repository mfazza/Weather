import React from "react";

//The approach below is the class-based component.  However, sometimes we don't need a lot of functionality: we just want to render things to the page

// class Weather extends React.Component {

//     //The syntax is a bit funky: if this.props.temperature is true, then it will render the line
//     render(){
//         return(
//             <div>
//                 { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
//                 { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
//                 { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
//                 { this.props.description && <p>Conditions: {this.props.description}</p> }
//                 { this.props.error && <p>{ this.props.error }</p> }
//             </div>
//         );
//     }

// }

//This is the same component above, in stateless form.
//please note that we cannot use 'this' anymore since we're not inside a class
//in an arrow function, we're only returning a single element (the div in this case)
//we can get rid of the return and return the div inside the parenthesis
const Weather = (props) => {
    
    return (
        <div>
            { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
            { props.temperature && <p>Temperature: {props.temperature}</p> }
            { props.humidity && <p>Humidity: {props.humidity}</p> }
            { props.description && <p>Conditions: {props.description}</p> }
            { props.error && <p>{ props.error }</p> }
        </div>
    );
}

export default Weather;