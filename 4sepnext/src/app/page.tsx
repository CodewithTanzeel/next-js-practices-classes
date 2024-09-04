import React from "react";

interface IBook {
  id:number,
  name:string,
  type:string,
  available:boolean,


}

async function Home() {
  let baseURL = "https://simple-books-api.glitch.me";

  let res = await fetch(`${baseURL}/books`);
  let books:IBook = await res.json();
  // console.log(books);

  books[0].name;

  return (
    <div className="justify-center  text-center flex">
      <h1 className="p-4">Home</h1>
    </div>
  );
}

export default Home;
