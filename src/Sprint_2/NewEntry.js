import React from "react";
import Steak1 from "./Photos/Steak1.jpg";
import Fish2 from "./Photos/Fish2.jpg";
import Broccoli3 from "./Photos/Broccoli3.jpg";
import Assorted4 from "./Photos/Assorted4.jpg";
import Popsicle5 from "./Photos/Popsicle5.jpg";
import Chicken6 from "./Photos/Chicken6.jpg";
import Pizza7 from "./Photos/Pizza7.jpg";
import Crab8 from "./Photos/Crab8.jpg";
import { useState } from "react";
import { useNavigate } from "react-router";

const NewEntry = () => {

  const [foodItem, setFoodItem]= useState({});
  const [quantity, setQuantity]= useState({});
  const [dateEntered, setDateEntered]= useState({});
  let navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    class Food {
        constructor(f, q, d) {
          this.foodItem = f;
          this.quantity = q;
          this.dateEntered = d;
        }
    
  };
    class Freezer_Items{
        addItemToFreezer(food){
            let freezer_items=JSON.parse(localStorage.getItem("Freezer_Item")) || [];
            let new_items=[...freezer_items, food];
            localStorage.setItem("Freezer_Item", JSON.stringify(new_items));
        }
    }
    const food= new Food(foodItem, quantity, dateEntered);
    const add_item= new Freezer_Items();
    add_item.addItemToFreezer(food);
    navigate("/DisplayContents")
}
  


  return (
    <div className="container">
      <div id="one"></div>
      <section className="frozen">
        <div>
          <img src={Steak1} alt="" width="50px" height="50px"></img>
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

      <h1>New Entry</h1>

      <form id="item-form" action="">
        <div>
          <label htmlFor="food">Food Item</label>

          <input
            type="text"
            id="food"
            className="u-full-width"
            name="foodItem"
            
            onChange={(e)=>setFoodItem(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>

          <input
            type="text"
            id="quantity"
            className="u-full-width"
            name="quantity"
            
            onChange={(e)=>setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date Entered</label>

          <input
            type="text"
            id="date"
            className="u-full-width"
            name="dateEntered"
            
            onChange={(e)=>setDateEntered(e.target.value)}
          />
        </div>
        <div>
          <input onClick={handleSubmit}
            id="four"
            type="submit"
            value="Submit"
            className="u-full-width"
          />
        </div>
      </form>
    </div>
  );
};

export default NewEntry;
