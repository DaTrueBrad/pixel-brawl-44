import React, { Suspense } from "react";
import CharCard from "../components/CharCard";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";

const MyCharacter = () => {
  const data = useLoaderData()
  console.log(data)

  const RenderAwaitedData = () => {
    let characters = useAsyncValue();
    console.log(characters);
    return characters.map((c) => <CharCard char={c} key={c.id} />);
  };

  return (
    <div className="flex flex-col items-center w-full h-fit">
      <h1>My Characters</h1>
      <input placeholder="Search" />
      <div className="flex flex-wrap gap-8 w-full justify-center">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={data.characters}>
            <RenderAwaitedData />
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default MyCharacter