import React from "react";

interface IBook {
  map(arg0: (b: any) => React.JSX.Element): React.ReactNode;
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
    <div>
      <h1
        className=" text-4xl
       justify-center p-5"
      >
        API INVOKING
      </h1>
      <ul className="text-2xl p-9 ">
        {books.map((b) => {
          return (
            <li key={b.id}>
              {b.name}
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
