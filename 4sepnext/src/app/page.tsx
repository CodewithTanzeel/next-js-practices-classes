import React from "react";

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function Home() {
  let baseURL = "https://simple-books-api.glitch.me";

  let res = await fetch(`${baseURL}/books`);
  let books: IBook = await res.json();
  // console.log(books);

  return (
    <div className="justify-center text-center text-white ">
      <h1 className=" text-4xl
       justify-center p-5">API INVOKING</h1>
      <ul className="text-2xl p-9 ">
        <li>{books[1].name}</li>
        <li>{books[2].name}</li>
        <li>{books[3].name}</li>
        <li>{books[4].name}</li>
        <li>{books[0].name}</li>
        <li>{books[5].name}</li>
      </ul>
    </div>
  );
}

export default Home;
