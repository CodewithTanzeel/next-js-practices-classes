"use server";

export let placeOrder = async () => {
  let orderdata = {
    bookId: 1,
    customerName: "TanzeelAhmad",
  };

  //   OrderPlace API calling

  let res = await fetch("https://simple-books-api.glitch.me/orders", {
    method: "POST",
    body: JSON.stringify(orderdata),
    headers: {
      Authorization: `c48784d4e79eb40582d60378a59a7c2cf1dc2d877f62a19d07c4d243f78ceaea`,
    },
  });
  let data = await res.json();
  console.log(data);
};



// {
    
//     "clientName":"RAZA",
//     "clientEmail": "Quant@example.com"

    
// }


// {
//     "created": true,
//     "orderId": "vVBpimDRA24N2FzvHKz-P"
// }