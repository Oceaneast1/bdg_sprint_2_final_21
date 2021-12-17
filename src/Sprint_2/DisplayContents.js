import React from "react";
import Steak1 from "./Photos/Steak1.jpg";
import Fish2 from "./Photos/Fish2.jpg";
import Broccoli3 from "./Photos/Broccoli3.jpg";
import Assorted4 from "./Photos/Assorted4.jpg";
import Popsicle5 from "./Photos/Popsicle5.jpg";
import Chicken6 from "./Photos/Chicken6.jpg";
import Pizza7 from "./Photos/Pizza7.jpg";
import Crab8 from "./Photos/Crab8.jpg";




const DisplayContents = () => {

  

  let currentItem = JSON.parse(localStorage.getItem("Freezer_Item"));
  console.log(currentItem);

  const handleRemove=()=>{

  }

    return (
    <div className="items">
      <div id="one">
        
      </div>
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
      <h1>Display Contents</h1>
      <table className="u-full-width">
        <thead id="list">
          <tr>
            <th id="a">Food Item</th>
            <th id="b">Quantity</th>
            <th id="c">Date Entered</th>
            <th id="d">Remove Item</th>
          </tr>
        </thead>
        <tbody id="freezer-list">
          {currentItem.map((item)=>{
            return(
              <tr>
                <td id="a">{item.foodItem}</td>
                <td id="b1">{item.quantity}</td>
                <td id="c1">{item.dateEntered}</td>
                <td>
                  <button id="btn1" onClick={(handleRemove())}>Remove</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayContents;
