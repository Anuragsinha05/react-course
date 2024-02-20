// var React = require("react"); ---->old method
//to write the html code or jsx. we can also use bable

// what is babel ?-->it is js compiler that convert modern js(es6) to old js which is understood by the browser.
// var React = require("react");-->we can also write using--->:"import React from 'react"
 
import React from "react";

// var ReactDOM = require("react-dom");
//here dom is use to write the  dom manupulation

import ReactDOM from "react-dom";

// ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback func')
// the above method render is used to display/ya dikhana

//------------------------------------------------------------------------------
// ReactDOM.render(<h1>hello world</h1>, document.getElementById("root"));   //|----->code try to run it
// -----------------------------------------------------------------------------

// -----------------------------------------------------------
// jsx --->stand for javascript(js) XML (x)--->eg:<h1>hello world</h1>

// 2) using pure strict java function

//code--->
// var h1 = document.createElement("h1");
// h1.innerHTML = "Anurag Genius";
// document.getElementById("root").appendChild(h1)

// 3) using bable method

// ===================================================================================================================================================================
// render take only one single elment or Node--->eg it cannot take both h1 and p element

// RENDERING MULTIPLE JSX ELEMEMENT INSIDE REACT.RENDER().

//CODE:--->
// ReactDOM.render(
//     <div>
//         <h1>this is thappa technical</h1>
//         <p>pls like and suscribe</p>
//     </div>,
//     document.getElementById("root"));

// in react  v16 orabove it is possible for render to return an array of element

//CODE:------>
// ReactDOM.render(
//     [<h1>this is thappa technical</h1>,
//     <p>pls like and suscribe toall</p>,
//     <h2>this is anurag</h2>],
//     document.getElementById("root"));

// ====================================================================================================================================================================

//REACT FRAGEMENT.

// React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM
// react mai jab hum div istamal karte hai tou ek aur extra div create hota hai kyuki jo humra rooot div hai uske andar ek aur div create hora so extra element create na karne ke liye hum React.Fragment ka istamal kar te hai.
// Recat.Fragement is slightly faster than div and also consume less memory than div
// "<Recat.Fragement>,</Recat.Fragement>"ko hum "<></>"" aise bhi likh sakte hai ise hum sugar form bhi kahte hai

//CODE:----->
ReactDOM.render(
  <>
    <h1>this is thappa technical</h1>
    <p>pls like and suscribe toall</p>
    <h2>this is anurag</h2>
  </>
);
