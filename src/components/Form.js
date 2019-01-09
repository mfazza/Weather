import React from "react";

// class Form extends React.Component{

//     render(){
//         return(
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="City..."/>
//                 <input type="text" name="country" placeholder="Country..."/>
//                 <button>Get Weather</button>
//             </form>
//         );
//     }

// }


//the conversion of this component into a stateless one is a bit different than Titles.js
//the this keyword makes no sense without a class, and props need to be passed in to 
//avoid being undefined
const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
    );
}

export default Form;