import React, { useRef, useContext } from "react";
import axios from "axios";
import AuthContext from "../state/AuthContext";

const AddCharacter = () => {
  const { state } = useContext(AuthContext);
  const charNameRef = useRef();
  const originRef = useRef();
  const imageRef = useRef();
  const attackRef = useRef();
  const defenseRef = useRef();
  const speedRef = useRef();
  const spDefRef = useRef();
  const spAtkRef = useRef();
  const luckRef = useRef();
  const healthRef = useRef();
  const weaponNameRef = useRef();
  const weaponAttackRef = useRef();
  const weaponTypeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      name: charNameRef.current.value,
      origin: originRef.current.value,
      image: imageRef.current.value,
      attack: attackRef.current.value,
      defense: defenseRef.current.value,
      health: healthRef.current.value,
      speed: speedRef.current.value,
      luck: luckRef.current.value,
      special_attack: spAtkRef.current.value,
      special_defense: spDefRef.current.value,
      userId: state.userId,
      weapons: [
        {
          name: weaponNameRef.current.value,
          attack: weaponAttackRef.current.value,
          type: weaponTypeRef.current.value,
        },
      ],
    };
    console.log(body);
    axios
      .post("/api/addCharacter", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col items-center gap-6 w-64"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl text-white">Add Character</h1>
        <input
          type="text"
          placeholder="Name"
          ref={charNameRef}
          className="w-full rounded h-8"
        />
        <input
          type="text"
          placeholder="Origin"
          className="w-full rounded h-8"
          ref={originRef}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full rounded h-8"
          ref={imageRef}
        />
        <input
          type="number"
          placeholder="Health"
          className="w-full rounded h-8"
          ref={healthRef}
        />
        <div className="flex flex-row gap-6 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <input
              type="number"
              placeholder="Attack"
              className="w-full rounded h-8"
              ref={attackRef}
            />
            <input
              type="number"
              placeholder="Defense"
              className="w-full rounded h-8"
              ref={defenseRef}
            />
            <input
              type="number"
              placeholder="Speed"
              className="w-full rounded h-8"
              ref={speedRef}
            />
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <input
              type="number"
              placeholder="Sp. Attack"
              className="w-full rounded h-8"
              ref={spAtkRef}
            />
            <input
              type="number"
              placeholder="Sp. Defense"
              className="w-full rounded h-8"
              ref={spDefRef}
            />
            <input
              type="number"
              placeholder="Luck"
              className="w-full rounded h-8"
              ref={luckRef}
            />
          </div>
        </div>
        <h2 className="text-white text-xl">Weapons</h2>
        <input
          type="text"
          placeholder="Weapon Name"
          className="w-full rounded h-8"
          ref={weaponNameRef}
        />
        <div className="flex flex-row gap-6 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <input
              type="number"
              placeholder="Attack"
              className="w-full rounded h-8"
              ref={weaponAttackRef}
            />
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <input
              type="text"
              placeholder="Type"
              className="w-full rounded h-8"
              ref={weaponTypeRef}
            />
          </div>
        </div>
        <button className="bg-orange-600 rounded p-2">Add Character</button>
      </form>
    </div>
  );
};

export default AddCharacter;
