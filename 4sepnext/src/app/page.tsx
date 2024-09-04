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


  return (
    <div className="justify-center  text-center flex">
      <h1 className="p-4">Home

      </h1>
      <ul>
        <li>
        books[0].name</li>
        <li>
        books[1].name</li>
        <li>
        books[2].name</li>
        <li>
        books[3].name</li>
        <li>
        books[4].name</li>
        <li>
        books[5].name</li>
      </ul>
    </div>
  );
}

export default Home;
