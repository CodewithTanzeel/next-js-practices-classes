import React from "react";

interface IBook{
  
}

 async function Home() {
  let baseURl = "https://simple-books-api.glitch.me";

  let res = await fetch(`${baseUrl}/books`);
  let books = await res.json();
  console.log(books);

  books[0].name

  return (
    <div className="justify-center  text-center flex">
      <h1 className="p-4">Home</h1>
    </div>
  );
}


export default Home