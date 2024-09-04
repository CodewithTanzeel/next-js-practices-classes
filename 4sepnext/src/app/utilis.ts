"use server";

export let placeOrder = async () => {
  let orderdata = {
    bookId: 1,
    customerName: "TanzeelAhmad",
  };

//   OrderPlace API calling

let res = await fetch ("https://simple-books-api.glitch.me/orders",{
    method:"POST",
    body:JSON.stringify(orderdata),
    headers:{
        Authorization:``
    }
})
 let data = await res.json()
 console.log(data)


};
