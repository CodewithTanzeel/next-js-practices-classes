"use client"
import React from "react";

function OrderButton () => {

let onOrderPlace = async () => {

    await placeOrder()
   
}
 return (
    <button>Order</button>
 )

}

export default OrderButton;




// A util file is where you keep reusable helper functions or tools that are used in different parts of your code, making your code cleaner and more organized.