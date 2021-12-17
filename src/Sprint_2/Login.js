import React, {Component} from "react";

import Steak1 from "./Photos/Steak1.jpg";
import Fish2 from "./Photos/Fish2.jpg";
import Broccoli3 from "./Photos/Broccoli3.jpg";
import Assorted4 from "./Photos/Assorted4.jpg";
import Popsicle5 from "./Photos/Popsicle5.jpg";
import Chicken6 from "./Photos/Chicken6.jpg";
import Pizza7 from "./Photos/Pizza7.jpg";
import Crab8 from "./Photos/Crab8.jpg";




  class Login extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.name.value);
      if (!e.target.name.value) {
        alert("Name is required");
      } else if (!e.target.name.value) {
        alert("Valid Name is required");
      } else if (!e.target.password.value) {
        alert("Password is required");
      } else if (
        e.target.name.value === "Gerald" &&
        e.target.password.value === "123456"
      ) {
        window.open("http://localhost:3001");
        e.target.name.value = "";
        e.target.password.value = "";
      } else if (
        e.target.name.value === "David" &&
        e.target.password.value === "123456"
      ) {
        window.open("http://localhost:3001");
        e.target.name.value = "";
        e.target.password.value = "";
      } else if (
        e.target.name.value === "Barry" &&
        e.target.password.value === "123456"
      ) {
        window.open("http://localhost:3001");
        e.target.name.value = "";
        e.target.password.value = "";
      } else {
        alert("Wrong name or password combination");
      }
    };

  handleClick = (e) => {
    e.preventDefault();
    alert("Go to registration page");
  };
  render() {
    return (
      <div className="container">
          <section className="frozen">
       <div>
           <img
             src={Steak1}
            alt=""
            width="50px"
            height="50px"
            border-radius="10vh"
          ></img>
        </div>
        <div>
          <img src={Fish2} alt="" width="50px" height="50px"></img>
        </div>
        <div>
          <img src={Broccoli3} alt="" width="50px" height="50px"></img>
        </div>
        <div>
           <img src={Assorted4} alt="" width="50px" height="50px"></img>
         </div>
         <div>
           <img src={Popsicle5} alt="" width="50px" height="50px"></img>
         </div>
         <div>
           <img src={Chicken6} alt="" width="50px" height="50px"></img>
         </div>
         <div>
           <img src={Pizza7} alt="" width="50px" height="50px"></img>
         </div>
         <div>
           <img src={Crab8} alt="" width="50px" height="50px"></img>
         </div>
       </section>
       <h1>Login</h1>

        <form className="item-form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="name" id="name" name="name" placeholder="name" className="u-full-width"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="password" className="u-full-width"/>
          </div>
          <button id="enter" className="u-full-width">Enter</button>
        </form>
        <button id="register" className="u-full-width" onClick={this.handleClick}>Registration</button>
      </div>
    );
    }
    }
export default Login;

