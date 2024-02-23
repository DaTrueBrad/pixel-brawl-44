import React, { Suspense } from "react";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";

const CharacterInfo = ({addToSelected}) => {
  let data = useLoaderData();

  const RenderAwaitedData = () => {
    let character = useAsyncValue();
    console.log(character);
    return (
      <>
        <h1>{character.name}</h1>
        <img src={character.image} />
        <p>{character.origin}</p>
        <h5>Health: {character.health}</h5>
        <div className="flex flex-row w-full justify-around">
          <h5>Attack: {character.attack}</h5>
          <h5>Defense: {character.defense}</h5>
        </div>
        <div className="flex flex-row w-full justify-around">
          <h5>Special Attack: {character.special_attack}</h5>
          <h5>Special Defense: {character.special_defense}</h5>
        </div>
        <div className="flex flex-row w-full justify-around">
          <h5>Speed: {character.speed}</h5>
          <h5>Luck: {character.luck}</h5>
        </div>
        <div>
          {character.weapons.map((w) => (
            <div>
              <h5>{w.name}</h5>
              <h5>Attack: {w.attack}</h5>
              <h5>Type: {w.type}</h5>
            </div>
          ))}
        </div>
        <button className="rounded p-2 bg-orange-600" onClick={() => addToSelected(character)}>Add to Battle!</button>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={data.character}>
          <RenderAwaitedData />
        </Await>
      </Suspense>
    </div>
  );
};

export default CharacterInfo;
